import { Body, Controller, Post, Req, Res, Next } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create_role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() CreateRoleDto:CreateRoleDto,@Req() request,@Res() res,@Next() next) {
    try {
      //const _role = await this.roleService.create(CreateRoleDto);
     
      return res.status(200).json({
        status:'success',
        //data:_role
      })
    } catch (error) {
      return res.status(500).json({
        status:'error',
        error:error.message
      })
    }
  }
}
