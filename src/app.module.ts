import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ControllerModule } from './controller/controller.module';
import { TransactionEntity } from './entity/transaction.entity';
import { ExpensesCategoryEntity } from './entity/expensesCategory.entity';
import { IncomeCategoryEntity } from './entity/incomeCategory.entity';


@Module({
  controllers: [],
  providers: [],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '8836612',
      database: 'transaction1',
      entities: [TransactionEntity, ExpensesCategoryEntity, IncomeCategoryEntity],
      logging: true,
      synchronize: true,
    }),
    ControllerModule
  ],
})
export class AppModule { }
