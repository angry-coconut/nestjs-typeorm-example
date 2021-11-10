import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalInfoDto } from './create-personal-info.dto';

export class UpdatePersonalInfoDto extends PartialType(CreatePersonalInfoDto) {}
