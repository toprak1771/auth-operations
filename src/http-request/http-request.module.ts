import { Module } from '@nestjs/common';
import { HttpRequestService } from './http-request.service';
import { HttpRequestController } from './http-request.controller';
import { DatabaseModule } from "src/database/database.module";
import { httpRequestProviders } from './http-request.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [HttpRequestController],
  providers: [HttpRequestService,...httpRequestProviders],
})
export class HttpRequestModule {}
