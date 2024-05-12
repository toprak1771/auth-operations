import { Test, TestingModule } from '@nestjs/testing';
import { HttpRequestController } from './http-request.controller';
import { HttpRequestService } from './http-request.service';

describe('HttpRequestController', () => {
  let controller: HttpRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpRequestController],
      providers: [HttpRequestService],
    }).compile();

    controller = module.get<HttpRequestController>(HttpRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
