import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonalInfo } from './personal-info.entity';

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
}
