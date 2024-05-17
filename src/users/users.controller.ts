import { Body, Controller, Post, Req, Res, Next } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @Req() request,
    @Res() res,
    @Next() next,
  ) {
    try {
      const _user = await this.usersService.create(createUserDto);

      return res.status(200).json({
        data: _user,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        error: error.message,
      });
    }
  }
}
