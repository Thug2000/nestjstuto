import { Test, TestingModule } from '@nestjs/testing';
import { RanduserController } from './randuser.controller';

describe('RanduserController', () => {
  let controller: RanduserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RanduserController],
    }).compile();

    controller = module.get<RanduserController>(RanduserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
