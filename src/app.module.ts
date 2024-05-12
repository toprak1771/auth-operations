import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { HttpRequestModule } from './http-request/http-request.module';


@Module({
  imports: [AuthModule, RoleModule, HttpRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
