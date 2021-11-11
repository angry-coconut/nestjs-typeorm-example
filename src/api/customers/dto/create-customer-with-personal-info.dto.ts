import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';
import { CreatePersonalInfoDto } from '../../personal-info/dto/create-personal-info.dto';

class PersonalInfoWithoutId extends OmitType(CreatePersonalInfoDto, [
  'id',
] as const) {}

export class CreateCustomerWithPersonalInfoDto extends CreateCustomerDto {
  @ApiProperty()
  personalInfo: PersonalInfoWithoutId;
}
