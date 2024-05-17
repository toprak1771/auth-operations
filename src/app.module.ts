import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { HttpRequestModule } from './http-request/http-request.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [AuthModule, RoleModule, HttpRequestModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
