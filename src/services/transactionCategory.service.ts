import { Injectable } from '@nestjs/common';
import { TransactionCategoryDto } from 'src/dto/transactionCategory.dto';
import { UpdateTransactionCategoryDto } from 'src/dto/updateTransactionCategory.dto';
import { TransactionCategoryRepository } from './transactionCategory.repositary';

@Injectable()
export class TransactionCategoryService {

   constructor(private readonly transactionCategoryRepository: TransactionCategoryRepository) { }

   async create(dto: TransactionCategoryDto) {
      const transactionCategory = await this.transactionCategoryRepository.save(dto)
      return transactionCategory
   }

   async getAll() {
      let transactionCategory = await this.transactionCategoryRepository.find()
      if (transactionCategory.length === 0) {
         transactionCategory = await this.transactionCategoryRepository.setDefaultValueTransactionCategory()
         transactionCategory = await this.transactionCategoryRepository.find()
      }
      return transactionCategory
   }

   async delete(id: number) {
      return await this.transactionCategoryRepository.delete({ id })
   }

   async update(id: number, updateTransactionCategoryDto: boolean) {
      let transactionCategory = await this.transactionCategoryRepository.findOne({ id })
      transactionCategory.inMainPage = updateTransactionCategoryDto
      return await this.transactionCategoryRepository.save(transactionCategory)
   }
}
