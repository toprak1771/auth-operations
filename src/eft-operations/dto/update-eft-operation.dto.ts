import { PartialType } from '@nestjs/mapped-types';
import { CreateEftOperationDto } from './create-eft-operation.dto';

export class UpdateEftOperationDto extends PartialType(CreateEftOperationDto) {}
