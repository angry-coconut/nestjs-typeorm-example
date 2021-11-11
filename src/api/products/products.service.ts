import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '../../database/entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      await this.productRepo.insert(createProductDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async findAll() {
    return this.productRepo.find();
  }

  async findOne(id: string) {
    return this.productRepo.findOne({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      await this.productRepo.update({ id }, updateProductDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async remove(id: string) {
    try {
      await this.productRepo.delete({ id });
    } catch (e) {
      return false;
    }
    return true;
  }
}
