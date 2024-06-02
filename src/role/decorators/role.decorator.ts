import { SetMetadata, Injectable } from "@nestjs/common";
import { RoleService } from "../role.service";

@Injectable()
export class RolesDecoratorFactory {
  constructor(private readonly rolesService: RoleService) {}

  async createRolesDecorator():Promise<(...roles:string[]) => void> {
    const ROLES_KEY = 'roles';
    const roles = await this.rolesService.getAllRoles();
    console.log("roles:",roles);
    const roleNames = roles.map(role => role.name);
    return (...roles :string[]) => SetMetadata(ROLES_KEY,roles.length ? roles: roleNames);
  }
  
}
