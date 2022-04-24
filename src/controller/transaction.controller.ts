import { MyMoneyService } from './../services/MyMoney.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';
import { TransactionService } from 'src/services/transaction.service';

@Controller('transaction')
export class TransactionController {

   constructor(private transactionService: TransactionService,
      private myMoneyService: MyMoneyService) { }

   @Get()
   getAll() {
      return this.transactionService.getAllTransactions()
   }

   @Get(':id')
   getOne(@Param('id') id: number) {
      return this.transactionService.getOneTransactions(id)
   }

   @Post()
   create(@Body() body: CreateTransactionDto) {
      this.myMoneyService.setMyMoneyValue(body.transactionValue, body.isIncome, body.idUser)
      console.log(body)
      return this.transactionService.createTransaction(body)
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
      const transaction = await this.transactionService.getOneTransactions(id)
      this.myMoneyService.updateMyMoneyValue(transaction[0].transactionValue, transaction[0].isIncome, transaction[0].idUser)
      this.transactionService.deleteTransaction(id);
   }
}
