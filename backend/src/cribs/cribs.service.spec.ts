import { Test, TestingModule } from '@nestjs/testing';
import { CribsService } from './cribs.service';

describe('CribsService', () => {
  let service: CribsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CribsService],
    }).compile();

    service = module.get<CribsService>(CribsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
