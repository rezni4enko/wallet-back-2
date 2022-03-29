import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transaction' })
export class TransactionEntity extends BaseEntity {
   @PrimaryGeneratedColumn()
   id?: number;

   @Column()
   transactionCategory: string;

   @Column()
   comment?: string;

   @Column()
   transactionValue?: number;

   @Column()
   isIncome?: boolean;

   @Column()
   idUser?: number;

   @CreateDateColumn()
   created_at: Date;
}