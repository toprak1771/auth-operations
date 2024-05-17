import { Body, Controller, Post, Req, Res, Next } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

}
