import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';
import { TransactionRepository } from './transaction.repositary';

@Injectable()
export class TransactionService {

   constructor(private readonly transactionRepository: TransactionRepository) { }

   async createTransaction(dto: CreateTransactionDto) {
      const transaction = await this.transactionRepository.save(dto)
      return transaction
   }

   async getAllTransactions() {
      const transactions = await this.transactionRepository.find()
      return transactions
   }

   async getOneTransactions(id: number) {
      const transactions = await this.transactionRepository.find({ id })
      return transactions
   }

   async deleteTransaction(id: number) {
      return await this.transactionRepository.delete({ id })
   }
}
