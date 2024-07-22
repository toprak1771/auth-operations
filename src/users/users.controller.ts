import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  Next,
  Inject,
  Get,
  Put,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto, UpdateUserDto } from "./dto/create-user.dto";
import { RoleService } from "src/role/role.service";
import { Public } from "src/auth/decorators/public.decorator";
import * as mongoose from "mongoose";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly roleService: RoleService,
    @Inject("DATABASE_CONNECTION")
    private readonly connection: mongoose.Connection,
  ) {}

  @Public()
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @Req() request,
    @Res() res,
    @Next() next,
  ) {
    const transactionSession = await this.connection.startSession();
    transactionSession.startTransaction();
    try {
      const _user = await this.usersService.create(
        createUserDto,
        transactionSession,
      );
      //  const roleObject = {
      //    name:'denemedeneme',
      //    value:'sad'
      //  };
      //  const _role = await this.roleService.create(roleObject,transactionSession);
      //  console.log("role:",_role);
      await transactionSession.commitTransaction();

      return res.status(200).json({
        data: {
          user: _user,
        },
      });
    } catch (error) {
      console.log("error:", error);
      await transactionSession.abortTransaction();
      await transactionSession.endSession();
      return res.status(500).json({
        status: "error",
        error: error.message,
      });
    } finally {
      await transactionSession.endSession();
    }
  }

  @Get()
  async getAllUsers(@Req() request, @Res() res, @Next() next) {
    const users = await this.usersService.getAll();
    res.send(users);
  }

  @Put()
  async updateUser(@Body() updateUserDto:UpdateUserDto,@Req() request, @Res() res, @Next() next){
    try {
      
      const updatedUser = await this.usersService.update(updateUserDto);
      
      return res.status(200).json({
        data: {
          updatedUser: updatedUser,
        },
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        error: error.message,
      });
    }
  }

}
