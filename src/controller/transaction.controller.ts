import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';
import { TransactionService } from 'src/services/transaction.service';

@Controller('transaction')
export class TransactionController {

   constructor(private transactionService: TransactionService) { }

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
      console.log(body)
      return this.transactionService.createTransaction(body)
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
      this.transactionService.deleteTransaction(id);
   }
}