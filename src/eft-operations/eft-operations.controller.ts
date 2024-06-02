import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Next,
  Req,
  Res
} from "@nestjs/common";
import { EftOperationsService } from "./eft-operations.service";
import { CreateEftOperationDto } from "./dto/create-eft-operation.dto";
import { UpdateEftOperationDto } from "./dto/update-eft-operation.dto";
import { Public } from "src/auth/decorators/public.decorator";

@Controller("eft-operations")
export class EftOperationsController {
  constructor(private readonly eftOperationsService: EftOperationsService) {}

  
  @Post()
  async create(
    @Body() createEftOperationDto: CreateEftOperationDto,
    @Req() request,
    @Res() res,
    @Next() next,
  ) {
    try {
      const _eft = await this.eftOperationsService.create(createEftOperationDto);
     
      return res.status(200).json({
        data: _eft,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        error: error.message,
      });
    }
    
  }

  @Public()
  @Get()
  async findAll() {
    return this.eftOperationsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eftOperationsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEftOperationDto: UpdateEftOperationDto,
  ) {
    return this.eftOperationsService.update(+id, updateEftOperationDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eftOperationsService.remove(+id);
  }
}
