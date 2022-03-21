import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';
import { ExpensesCategoryRepository } from './expensesCategory.repositary';

@Injectable()
export class ExpensesCategoryService {

   constructor(private readonly expensesCategoryRepository: ExpensesCategoryRepository) { }

   async createTransaction(dto: CreateTransactionDto) {
      const expensesCategory = await this.expensesCategoryRepository.save(dto)
      return expensesCategory
   }

   async getAllTransactions() {
      const expensesCategory = await this.expensesCategoryRepository.find()
      return expensesCategory
   }

   async getOneTransactions(id: number) {
      const expensesCategory = await this.expensesCategoryRepository.find({ id })
      return expensesCategory
   }

   async deleteTransaction(id: number) {
      return await this.expensesCategoryRepository.delete({ id })
   }
}
