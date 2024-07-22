import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';


export class CreateUserDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly age: number;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly authority: [];
  }

  export class UpdateUserDto {
    @IsNotEmpty()
    readonly name?: string;

    @IsNotEmpty()
    readonly age?: number;

    @IsNotEmpty()
    password?: string;

    @IsNotEmpty()
    readonly username?: string;

    @IsNotEmpty()
    readonly authority?: [];

    @IsNotEmpty()
    readonly id:ObjectId
  }