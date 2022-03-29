import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transactioncategory' })
export class TransactionCategoryEntity extends BaseEntity {
   @PrimaryGeneratedColumn()
   id?: number;

   @Column()
   transactionCategory: string;

   @Column()
   isIncome?: boolean;

   @Column()
   defaultValue?: boolean;

   @Column()
   inMainPage?: boolean;

   @Column()
   idUser?: number;
}