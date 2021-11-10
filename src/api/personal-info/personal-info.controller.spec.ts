import { Test, TestingModule } from '@nestjs/testing';
import { PersonalInfoController } from './personal-info.controller';
import { PersonalInfoService } from './personal-info.service';

describe('PersonalInfoController', () => {
  let controller: PersonalInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalInfoController],
      providers: [PersonalInfoService],
    }).compile();

    controller = module.get<PersonalInfoController>(PersonalInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
