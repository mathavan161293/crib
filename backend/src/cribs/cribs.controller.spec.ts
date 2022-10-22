import { Test, TestingModule } from '@nestjs/testing';
import { CribsController } from './cribs.controller';
import { CribsService } from './cribs.service';

describe('CribsController', () => {
  let controller: CribsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CribsController],
      providers: [CribsService],
    }).compile();

    controller = module.get<CribsController>(CribsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
