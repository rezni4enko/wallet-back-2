import { MyMoneyService } from './../services/MyMoney.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';

@Controller('my-money')
export class MyMoneyController {

   constructor(private myMoneyService: MyMoneyService) { }

   @Get()
   getAll() {
      return this.myMoneyService.getAll()
   }

   @Get(':id')
   getOne(@Param('id') id: number) {
      return this.myMoneyService.getOne(id)
   }

   @Post()
   create(@Body() body: CreateTransactionDto) {
      return this.myMoneyService.create(body)
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
      this.myMoneyService.delete(id);
   }
}
