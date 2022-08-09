import { Test, TestingModule } from '@nestjs/testing';
import { RanduserService } from './randuser.service';

describe('RanduserService', () => {
  let service: RanduserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RanduserService],
    }).compile();

    service = module.get<RanduserService>(RanduserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
