import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

   // constructor(comment: string, transactionCategory: string, id?: number, transactionValue?: number) {
   //    super();
   //    this.id = id;
   //    this.comment = comment;
   //    this.transactionCategory = transactionCategory;
   //    this.transactionValue = transactionValue
   // }
}