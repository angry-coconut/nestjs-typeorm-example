import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from '../../database/entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      await this.orderRepo.insert(createOrderDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async findAll() {
    return this.orderRepo.find({});
  }

  async findOne(id: string) {
    return this.orderRepo.find({ id });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      await this.orderRepo.update({ id }, updateOrderDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async remove(id: string) {
    try {
      await this.orderRepo.delete({ id });
    } catch (e) {
      return false;
    }
    return true;
  }
}
