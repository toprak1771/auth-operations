import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { RabbitMQService } from 'src/services/rabbitmq_service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from "src/database/database.module";
import { RoleModule } from 'src/role/role.module';


@Module({
  imports:[DatabaseModule,RoleModule],
  providers: [UsersService,...usersProviders,RabbitMQService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
