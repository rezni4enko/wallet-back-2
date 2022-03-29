import { MyMoneyService } from './../services/MyMoney.service';
import { MyMoneyController } from './myMoney.controller';
import { MyMoneyRepository } from './../services/myMoney.repositary';
import { MyMoneyEntity } from './../entity/myMoney.entity';
import { TransactionCategoryService } from './../services/transactionCategory.service';
import { TransactionCategoryRepository } from './../services/transactionCategory.repositary';
import { TransactionCategoryEntity } from './../entity/transactionCategory.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/entity/transaction.entity';
import { TransactionRepository } from 'src/services/transaction.repositary';
import { TransactionService } from 'src/services/transaction.service';
import { TransactionController } from './transaction.controller';
import { TransactionCategoryController } from './transactionCategory.controller';

@Module({
   imports: [
      TypeOrmModule.forFeature([TransactionEntity, TransactionRepository,
         TransactionCategoryEntity, TransactionCategoryRepository,
         MyMoneyEntity, MyMoneyRepository]),
   ],
   controllers: [TransactionController, TransactionCategoryController, MyMoneyController],
   providers: [TransactionService, TransactionCategoryService, MyMoneyService]
})
export class ControllerModule { }
