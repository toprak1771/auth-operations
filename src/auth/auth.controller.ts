import { Body, Controller, Post, Req, Res, Next } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { AuthService } from "./auth.service";
import { User } from "./interfaces/user.interface";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @Req() request,
    @Res() res,
    @Next() next,
  ) {
    try {
      const _user = await this.authService.create(createUserDto);
      
      return res.status(200).json({
        status:'success',
        data:_user
      })
    } catch (error) {
        return res.status(500).json({
            status:'error',
            error:error.message
          })
    }
  }
}
