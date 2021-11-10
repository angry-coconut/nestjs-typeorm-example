import { Module } from '@nestjs/common';
import { PersonalInfoService } from './personal-info.service';
import { PersonalInfoController } from './personal-info.controller';

@Module({
  controllers: [PersonalInfoController],
  providers: [PersonalInfoService]
})
export class PersonalInfoModule {}
