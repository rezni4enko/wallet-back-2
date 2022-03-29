import { TransactionCategoryEntity } from './../entity/transactionCategory.entity';
import { Repository, EntityRepository } from 'typeorm'


@EntityRepository(TransactionCategoryEntity)
export class TransactionCategoryRepository extends Repository<TransactionCategoryEntity> {

   isValueTransactionCategory(userId: number) {
      return this.query(`
          select *
          from transactionCategory
          where "idUser" = ${userId}
                `)
   }

   setDefaultValueTransactionCategory() {
      return this.query(`
      INSERT
      INTO transactioncategory
      ("transactionCategory", "isIncome", "inMainPage", "defaultValue","idUser")
      VALUES ( 'Обеды', true,  true, true, 0), 
      ( 'Бензин', true,  true, true, 0),
      ('Одежда', true, true, true, 0),
      ('Продукты', true, true, true, 0),
      ('Спорт', true, true, true, 0),
      ('Дом', true, true, true, 0),
      ('Зарплата', false, true, true, 0),
      ('Подарки', false, true, true, 0),
      ('Бизнес', false, true, true, 0),
      ('Дивиденты', false, true, true, 0),
      ('Подработка', false, true, true, 0)
      `)
   }
}
