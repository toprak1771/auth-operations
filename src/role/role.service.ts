import { Injectable,Inject } from '@nestjs/common';
import { Model } from "mongoose";
import { Role } from './interfaces/role.interface';
import { CreateRoleDto } from './dto/create_role.dto';
@Injectable()
export class RoleService {
    constructor(@Inject('ROLE_MODEL') private readonly roleModel: Model<Role>){}

    async create(CreateRoleDto:CreateRoleDto) : Promise<Role> {
        const createdRole = this.roleModel.create(CreateRoleDto);
        return createdRole;
    }
}
