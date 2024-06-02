import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { HttpRequestModule } from './http-request/http-request.module';
import { UsersModule } from './users/users.module';
import { EftOperationsModule } from './eft-operations/eft-operations.module';
import { AuthorityMiddleware } from './middlewares/authority.middleware';

@Module({
  imports: [AuthModule, RoleModule, HttpRequestModule, UsersModule, EftOperationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(AuthorityMiddleware).forRoutes('eft-operations')
  }
}
