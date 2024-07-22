
import { Document } from "mongoose";

export interface Role extends Document {
  readonly name: string;
  readonly value: number;
}

export enum RoleEnum {
  Member='member',
  Supervisor='supervisor',
  Admin='admin',
  Test='test',
}