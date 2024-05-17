import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/signIn.dto";

@Injectable()
export class AuthService {
  constructor(private usersService:UsersService,private jwtService:JwtService) {}

  // async signIn(SignInDto:SignInDto) : Promise<{access_token:string}>{

  // }
}
