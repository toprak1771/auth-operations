import { Inject, Injectable } from "@nestjs/common";
import { User } from "./interfaces/users.interface";
import { Model } from "mongoose";
import * as mongoose from 'mongoose';
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "./dto/create-user.dto";
import * as dotenv from "dotenv";
dotenv.config();

@Injectable()
export class UsersService {
  constructor(@Inject("USER_MODEL") private readonly userModel: Model<User>) {}

  async create(CreateUserDto: CreateUserDto,session:mongoose.ClientSession): Promise<User> {
    const saltRounds = process.env.SALTROUNDS;

    const hashedPassword = await bcrypt.hash(
      CreateUserDto.password,
      Number(saltRounds),
    );
    CreateUserDto.password = hashedPassword;
    
    //  const createdUser = await this.userModel.create(CreateUserDto);
    //  createdUser.save({session});
     const createdUser =  new this.userModel(CreateUserDto);
     return createdUser.save({session});
    //return createdUser?._id;
  }

  async findOne(_username:string): Promise<User[]> {
    const user= await this.userModel.find({username:_username}).exec();
    return user;
  }
  
  async getAll():Promise<any> {
    const users = await this.userModel.find().populate('authority.pool_role');
    return users;
  }
}


