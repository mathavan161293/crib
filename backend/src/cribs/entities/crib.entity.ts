import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Crib {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  img: string;

  @Column({ length: 30 })
  location: string;
}
