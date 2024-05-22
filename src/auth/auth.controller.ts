import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  Next,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/signIn.dto";
import { AuthGuard } from "./auth.guard";
import { Public } from "./decorators/public.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post("login")
  async signIn(
    @Body() signInDto: SignInDto,
    @Req() request,
    @Res() res,
    @Next() next,
  ) {
    const token = await this.authService.signIn(signInDto);

    return res.json({
      token,
    });
  }

  
  @Get('profile')
  async getProfile(@Req() req) {
    return req.user;
  }
}
