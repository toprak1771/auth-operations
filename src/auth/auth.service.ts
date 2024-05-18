import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/signIn.dto";
import * as bcrypt from "bcrypt";
import { User } from "src/users/interfaces/users.interface";
import { Payload } from "./interfaces/payload.interface";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<object> {
    const user: User = (
      await this.usersService.findOne(signInDto.username)
    )?.[0];

    const isMatch: boolean = await bcrypt.compare(
      signInDto.password,
      user.password,
    );

    if (!isMatch) throw new UnauthorizedException();
    
    const payload: Payload = { sub: user._id, username: user.username };
    const access_token:string = await this.jwtService.signAsync(payload);
    payload.token =access_token;

    return {
      payload:payload,
    };
  }
}
