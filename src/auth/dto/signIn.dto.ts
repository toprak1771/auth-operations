import { IsNotEmpty } from "class-validator";

export class SignInDto {
  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly username: string;
}
