import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { DatabaseModule } from "src/database/database.module";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants  } from "./constants";
import { AuthGuard } from "./auth.guard";


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
  providers: [AuthService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
    },],
  exports:[AuthService],
})
export class AuthModule {}
