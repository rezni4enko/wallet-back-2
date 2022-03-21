import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ExpensesCategoryDto } from 'src/dto/expensesCategory.dto';
import { ExpensesCategoryService } from 'src/services/expensesCategory.service';

@Controller('expensescategory')
export class ExpensesCategoryController {

   constructor(private expensesCategoryService: ExpensesCategoryService) { }

   @Get()
   getAll() {
      return this.expensesCategoryService.getAllTransactions()
   }

   @Get(':id')
   getOne(@Param('id') id: number) {
      return this.expensesCategoryService.getOneTransactions(id)
   }

   @Post()
   create(@Body() body: ExpensesCategoryDto) {
      console.log(body)
      return this.expensesCategoryService.createTransaction(body)
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
      this.expensesCategoryService.deleteTransaction(id);
   }
}
