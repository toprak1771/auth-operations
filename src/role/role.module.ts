import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RabbitMQService } from 'src/services/rabbitmq_service';
import { DatabaseModule } from "src/database/database.module";
import { roleProviders } from './role.providers';

@Module({
  imports: [
    DatabaseModule
   ],
  controllers: [RoleController],
  providers: [RoleService,...roleProviders,RabbitMQService],
  exports:[RoleService]
})
export class RoleModule {}
