import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonalInfoService } from './personal-info.service';
import { CreatePersonalInfoDto } from './dto/create-personal-info.dto';
import { UpdatePersonalInfoDto } from './dto/update-personal-info.dto';

@Controller('personal-info')
export class PersonalInfoController {
  constructor(private readonly personalInfoService: PersonalInfoService) {}

  @Post()
  create(@Body() createPersonalInfoDto: CreatePersonalInfoDto) {
    return this.personalInfoService.create(createPersonalInfoDto);
  }

  @Get()
  findAll() {
    return this.personalInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalInfoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonalInfoDto: UpdatePersonalInfoDto,
  ) {
    return this.personalInfoService.update(+id, updatePersonalInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalInfoService.remove(+id);
  }
}
