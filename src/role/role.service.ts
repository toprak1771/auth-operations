import { Injectable,Inject } from '@nestjs/common';
import { Model } from "mongoose";
import * as mongoose from 'mongoose';
import { Role } from './interfaces/role.interface';
import { CreateRoleDto } from './dto/create_role.dto';
@Injectable()
export class RoleService {
    constructor(@Inject('ROLE_MODEL') private readonly roleModel: Model<Role>){}

    async create(CreateRoleDto:CreateRoleDto,session:mongoose.ClientSession) : Promise<Role> {
        //const createdRole = await this.roleModel.create(CreateRoleDto);
        const createdRole = new this.roleModel(CreateRoleDto);
        return createdRole.save({session})
        //return createdRole
    }

    async getAllRoles() : Promise<Role[]> {
        return this.roleModel.find();
    }
}
