import { Test, TestingModule } from '@nestjs/testing';
import { CellarController } from './cellar.controller';

describe('Cellar Controller', () => {
  let controller: CellarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CellarController],
    }).compile();

    controller = module.get<CellarController>(CellarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
