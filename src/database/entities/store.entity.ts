import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @OneToMany(() => Product, (product) => product.store)
  @JoinColumn({ name: 'id', referencedColumnName: 'store_id' })
  products: Product[];
}
