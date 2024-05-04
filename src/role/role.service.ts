import { Injectable,Inject } from '@nestjs/common';
import { Model } from "mongoose";
import { Role } from './interfaces/role.interface';
@Injectable()
export class RoleService {
    constructor(@Inject('ROLE_MODEL') private readonly roleModel: Model<Role>){}
}
