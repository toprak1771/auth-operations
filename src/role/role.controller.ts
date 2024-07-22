import { Body, Controller, Post, Req, Res, Next,Get,Inject } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create_role.dto';
import * as mongoose from "mongoose";

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService,@Inject("DATABASE_CONNECTION") private readonly connection:mongoose.Connection) {}

  @Post()
  async create(@Body() CreateRoleDto:CreateRoleDto,@Req() request,@Res() res,@Next() next) {
    try {
      const transactionSession = await this.connection.startSession();
      const _role = await this.roleService.create(CreateRoleDto,transactionSession);
     
      return res.status(200).json({
        status:'success',
        data:_role
      })
    } catch (error) {
      return res.status(500).json({
        status:'error',
        error:error.message
      })
    }
  }

  
  @Get()
  async getAll(@Req() request,@Res() res,@Next() next) {
    try {
      const roles = await this.roleService.getAllRoles();
      console.log("roles:",roles);
    } catch (error) {
      return res.status(500).json({
        status:'error',
        error:error.message
      })
    }
  }
}
