import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports:[DatabaseModule],
  providers: [UsersService,...usersProviders],
  controllers: [UsersController]
})
export class UsersModule {}
