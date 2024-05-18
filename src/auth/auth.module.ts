import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { DatabaseModule } from "src/database/database.module";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants  } from "./constants";

@Module({
  imports: [
   DatabaseModule,
   UsersModule,
   JwtModule.register({
    global:true,
    secret:jwtConstants.secret,
    signOptions:{expiresIn:'10m'},
   })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService],
})
export class AuthModule {}
