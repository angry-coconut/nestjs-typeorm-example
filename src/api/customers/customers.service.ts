import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from '../../database/entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      await this.customerRepo.insert(createCustomerDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async findAll() {
    return this.customerRepo.find();
  }

  async findOne(id: string) {
    return this.customerRepo.findOne({ id });
  }

  async findPersonalInfoById(id: string) {
    const { personalInfo } = await this.customerRepo.findOne(
      { id },
      { relations: ['personalInfo'] },
    );
    return personalInfo;
  }

  async findCustomerWithOrders(id: string) {
    return this.customerRepo.findOne(
      { id },
      {
        relations: ['orders', 'orders.product'],
      },
    );
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    try {
      await this.customerRepo.update({ id }, updateCustomerDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async remove(id: string) {
    try {
      await this.customerRepo.delete({ id });
    } catch (e) {
      return false;
    }
    return true;
  }
}
