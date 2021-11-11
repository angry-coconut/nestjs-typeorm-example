import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonalInfo } from './personal-info.entity';
import { Order } from './order.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  firstName: string;

  @Column({ type: 'text', nullable: false })
  lastName: string;

  @Column({ type: 'bool', nullable: false })
  isActive: boolean;

  @OneToOne(() => PersonalInfo)
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  personalInfo: PersonalInfo;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
