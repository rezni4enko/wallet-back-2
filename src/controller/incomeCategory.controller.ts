import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ExpensesCategoryDto } from 'src/dto/expensesCategory.dto';
import { IncomeCategoryService } from 'src/services/incomeCategory.service';

@Controller('incomecategory')
export class IncomeCategoryController {

   constructor(private incomeCategoryService: IncomeCategoryService) { }

   @Get()
   getAll() {
      return this.incomeCategoryService.getAllTransactions()
   }

   @Get(':id')
   getOne(@Param('id') id: number) {
      return this.incomeCategoryService.getOneTransactions(id)
   }

   @Post()
   create(@Body() body: ExpensesCategoryDto) {
      console.log(body)
      return this.incomeCategoryService.createTransaction(body)
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
      this.incomeCategoryService.deleteTransaction(id);
   }
}
