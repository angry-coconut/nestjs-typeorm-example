import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerWithPersonalInfoDto } from './dto/create-customer-with-personal-info.dto';
import { Customer } from '../../database/entities/customer.entity';
import { PersonalInfo } from '../../database/entities/personal-info.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      await this.customerRepo.insert(createCustomerDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async createWithPersonalInfo(
    createCustomerWithPersonalInfoDto: CreateCustomerWithPersonalInfoDto,
  ) {
    const { personalInfo, ...customerData } = createCustomerWithPersonalInfoDto;
    try {
      await this.connection.transaction(async (entityManager) => {
        /**
         * When transactions are used, important to use only repository, entity manager and other ways
         * for sql query creation, from argument of transaction callback.
         * DO NOT USE  this.customerRepo.insert()
         * USE entityManager.getRepository(Customer).insert
         * In case of usage incorrect repository, transaction will work incorrectly.
         */
        const transactionalCustomerRepo = entityManager.getRepository(Customer);
        const transactionalInfoRepo = entityManager.getRepository(PersonalInfo);
        const customer = await transactionalCustomerRepo.insert(customerData);
        const personalInfoData = {
          ...personalInfo,
          id: customer.generatedMaps[0].id,
        };
        await transactionalInfoRepo.insert(personalInfoData);
      });
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
