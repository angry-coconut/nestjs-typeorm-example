import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerWithPersonalInfoDto } from './dto/create-customer-with-personal-info.dto';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Post('/with-personal-info')
  createWithPersonalInfo(
    @Body()
    createCustomerWithPersonalInfoDto: CreateCustomerWithPersonalInfoDto,
  ) {
    return this.customersService.createWithPersonalInfo(
      createCustomerWithPersonalInfoDto,
    );
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Get(':id/personal-info')
  findPersonalInfo(@Param('id') id: string) {
    return this.customersService.findPersonalInfoById(id);
  }

  @Get(':id/orders')
  findOrders(@Param('id') id: string) {
    return this.customersService.findCustomerWithOrders(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
