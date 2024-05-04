import { Injectable,Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";


@Injectable()
export class AuthService {
  
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}
  
    async create(CreateUserDto:CreateUserDto) : Promise<User> {
        const createdUser = this.userModel.create(CreateUserDto);
        return createdUser;
    }
}
