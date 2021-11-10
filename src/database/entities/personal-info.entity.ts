import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PersonalInfo {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id: string;

  @Column({ type: 'text', nullable: false })
  address: string;

  @Column({ type: 'text', nullable: false })
  city: string;

  @Column({ type: 'text', nullable: false })
  country: string;
}
