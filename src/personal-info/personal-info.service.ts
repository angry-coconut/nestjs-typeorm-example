import { Injectable } from '@nestjs/common';
import { CreatePersonalInfoDto } from './dto/create-personal-info.dto';
import { UpdatePersonalInfoDto } from './dto/update-personal-info.dto';

@Injectable()
export class PersonalInfoService {
  create(createPersonalInfoDto: CreatePersonalInfoDto) {
    return 'This action adds a new personalInfo';
  }

  findAll() {
    return `This action returns all personalInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalInfo`;
  }

  update(id: number, updatePersonalInfoDto: UpdatePersonalInfoDto) {
    return `This action updates a #${id} personalInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalInfo`;
  }
}
