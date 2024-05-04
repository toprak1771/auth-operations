import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { User } from './interfaces/user.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @Post() 
    async create(@Body() createUserDto:CreateUserDto,@Req() request,@Res() res) {

        const _user = await this.authService.create(createUserDto);
        console.log("_user:",_user);
        return res.send(_user);
    }
}
