import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: 'money' })
export class MyMoneyEntity extends BaseEntity {
   @PrimaryGeneratedColumn()
   id?: number;

   @Column({
      type: 'int'
   })
   money?: number;

   @Column()
   idUser?: number;

   @CreateDateColumn()

   created_at: Date
}