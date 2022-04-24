import { TransactionCategoryService } from './../services/transactionCategory.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TransactionCategoryDto } from 'src/dto/transactionCategory.dto';
import { UpdateTransactionCategoryDto } from 'src/dto/updateTransactionCategory.dto';


@Controller('transactioncategory')
export class TransactionCategoryController {

   constructor(private transactionCategoryService: TransactionCategoryService) { }

   @Get()
   getAll() {
      return this.transactionCategoryService.getAll()
   }

   @Post()
   create(@Body() body: TransactionCategoryDto) {
      return this.transactionCategoryService.create(body)
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
      this.transactionCategoryService.delete(id);
   }

   @Patch(':id')
   update(@Param('id') id: number, @Body() updateTransactionCategoryDto: UpdateTransactionCategoryDto) {
      return this.transactionCategoryService.update(id, updateTransactionCategoryDto.inMainPage)
   }
}
