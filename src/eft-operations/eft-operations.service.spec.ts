import { Test, TestingModule } from '@nestjs/testing';
import { EftOperationsService } from './eft-operations.service';

describe('EftOperationsService', () => {
  let service: EftOperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EftOperationsService],
    }).compile();

    service = module.get<EftOperationsService>(EftOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
