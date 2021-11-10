import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonalInfoDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  country: string;
}
