import { Injectable,Inject } from '@nestjs/common';
import { CreateEftOperationDto } from './dto/create-eft-operation.dto';
import { UpdateEftOperationDto } from './dto/update-eft-operation.dto';
import { Model } from "mongoose";
import { EftOperation } from './entities/eft-operation.entity';


@Injectable()
export class EftOperationsService {
  constructor(@Inject("EFT_MODEL") private readonly eftModel: Model<EftOperation>) {}

  async create(createEftOperationDto: CreateEftOperationDto):Promise<EftOperation> {
    const createdEft = await this.eftModel.create(createEftOperationDto);
    return createdEft;
  }

  async findAll() {
    const allEfts = await this.eftModel.find();
    return allEfts;
  }

  findOne(id: number) {
    return `This action returns a #${id} eftOperation`;
  }

  update(id: number, updateEftOperationDto: UpdateEftOperationDto) {
    return `This action updates a #${id} eftOperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} eftOperation`;
  }
}
