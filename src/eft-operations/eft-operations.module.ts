import { Module } from '@nestjs/common';
import { EftOperationsService } from './eft-operations.service';
import { EftOperationsController } from './eft-operations.controller';
import { DatabaseModule } from 'src/database/database.module';
import { eftProviders } from './eft-operations.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [EftOperationsController],
  providers: [EftOperationsService,...eftProviders],
  exports:[EftOperationsService],
})
export class EftOperationsModule {}
