import { TransactionCategoryService } from './../services/transactionCategory.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TransactionCategoryDto } from 'src/dto/transactionCategory.dto';


@Controller('transactioncategory')
export class TransactionCategoryController {

   constructor(private transactionCategoryService: TransactionCategoryService) { }

   @Get()
   getAll() {
      return this.transactionCategoryService.getAll()
   }

   @Get(':id')
   getOne(@Param('id') id: number) {
      return this.transactionCategoryService.getOne(id)
   }

   @Post()
   create(@Body() body: TransactionCategoryDto) {
      return this.transactionCategoryService.create(body)
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
      this.transactionCategoryService.delete(id);
   }
}
