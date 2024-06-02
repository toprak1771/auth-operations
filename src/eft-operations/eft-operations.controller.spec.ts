import { Test, TestingModule } from '@nestjs/testing';
import { EftOperationsController } from './eft-operations.controller';
import { EftOperationsService } from './eft-operations.service';

describe('EftOperationsController', () => {
  let controller: EftOperationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EftOperationsController],
      providers: [EftOperationsService],
    }).compile();

    controller = module.get<EftOperationsController>(EftOperationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
