import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonalInfoDto } from './dto/create-personal-info.dto';
import { UpdatePersonalInfoDto } from './dto/update-personal-info.dto';
import { PersonalInfo } from '../../database/entities/personal-info.entity';

@Injectable()
export class PersonalInfoService {
  constructor(
    @InjectRepository(PersonalInfo)
    private readonly personalInfoRepo: Repository<PersonalInfo>,
  ) {}

  async create(createPersonalInfoDto: CreatePersonalInfoDto) {
    try {
      await this.personalInfoRepo.insert(createPersonalInfoDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async findAll() {
    return this.personalInfoRepo.find();
  }

  async findOne(id: string) {
    return this.personalInfoRepo.findOne({ id });
  }

  async update(id: string, updatePersonalInfoDto: UpdatePersonalInfoDto) {
    try {
      await this.personalInfoRepo.update({ id }, updatePersonalInfoDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async remove(id: string) {
    try {
      await this.personalInfoRepo.delete({ id });
    } catch (e) {
      return false;
    }
    return true;
  }
}
