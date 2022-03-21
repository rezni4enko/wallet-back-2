import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/entity/transaction.entity';
import { ExpensesCategoryEntity } from 'src/entity/expensesCategory.entity';
import { TransactionRepository } from 'src/services/transaction.repositary';
import { TransactionService } from 'src/services/transaction.service';
import { ExpensesCategoryRepository } from 'src/services/expensesCategory.repositary';
import { ExpensesCategoryService } from 'src/services/expensesCategory.service';
import { TransactionController } from './transaction.controller';
import { ExpensesCategoryController } from './expensesCategory.controller';
import { IncomeCategoryController } from './incomeCategory.controller';
import { IncomeCategoryService } from 'src/services/incomeCategory.service';
import { IncomeCategoryEntity } from 'src/entity/incomeCategory.entity';
import { IncomeCategoryRepository } from 'src/services/incomeCategory.repositary';


@Module({
   imports: [
      TypeOrmModule.forFeature([TransactionEntity, TransactionRepository, ExpensesCategoryEntity, ExpensesCategoryRepository, IncomeCategoryEntity, IncomeCategoryRepository]),
   ],
   controllers: [TransactionController, ExpensesCategoryController, IncomeCategoryController],
   providers: [TransactionService, ExpensesCategoryService, IncomeCategoryService]
})
export class ControllerModule { }
