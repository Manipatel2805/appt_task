import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
//ManikantaPatel PrashanthPatel VivekPatel EleandharPatel ManaswiniPatel ManishaPatel
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
