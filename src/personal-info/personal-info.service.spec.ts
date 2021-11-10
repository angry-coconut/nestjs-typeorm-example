import { Test, TestingModule } from '@nestjs/testing';
import { PersonalInfoService } from './personal-info.service';

describe('PersonalInfoService', () => {
  let service: PersonalInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalInfoService],
    }).compile();

    service = module.get<PersonalInfoService>(PersonalInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
