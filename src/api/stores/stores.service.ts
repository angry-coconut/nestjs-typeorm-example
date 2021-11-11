import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from '../../database/entities/store.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async create(createStoreDto: CreateStoreDto) {
    try {
      await this.storeRepository.insert(createStoreDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async findAll() {
    return this.storeRepository.find();
  }

  async findOne(id: string) {
    return this.storeRepository.findOne({ id });
  }

  async findAllProductsForStore(id: string) {
    return this.storeRepository.findOne(
      { id },
      {
        relations: ['products'],
      },
    );
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    try {
      await this.storeRepository.update({ id }, updateStoreDto);
    } catch (e) {
      return false;
    }
    return true;
  }

  async remove(id: string) {
    try {
      await this.storeRepository.delete({ id });
    } catch (e) {
      return false;
    }
    return true;
  }
}
