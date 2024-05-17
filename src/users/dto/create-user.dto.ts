import { IsNotEmpty } from 'class-validator';

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