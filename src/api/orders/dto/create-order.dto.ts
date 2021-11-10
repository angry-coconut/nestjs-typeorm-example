import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  productId: string;

  @ApiProperty()
  customerId: string;

  @ApiProperty()
  amount: number;
}
