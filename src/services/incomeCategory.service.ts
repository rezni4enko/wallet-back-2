import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';
import { IncomeCategoryRepository } from './incomeCategory.repositary';

@Injectable()
export class IncomeCategoryService {

   constructor(private readonly incomeCategoryRepository: IncomeCategoryRepository) { }

   async createTransaction(dto: CreateTransactionDto) {
      const incomeCategory = await this.incomeCategoryRepository.save(dto)
      return incomeCategory
   }

   async getAllTransactions() {
      const incomeCategory = await this.incomeCategoryRepository.find()
      return incomeCategory
   }

   async getOneTransactions(id: number) {
      const incomeCategory = await this.incomeCategoryRepository.find({ id })
      return incomeCategory
   }

   async deleteTransaction(id: number) {
      return await this.incomeCategoryRepository.delete({ id })
   }
}
