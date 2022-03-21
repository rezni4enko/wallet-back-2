import { ExpensesCategoryEntity } from 'src/entity/expensesCategory.entity';
import { Repository, EntityRepository } from 'typeorm'


@EntityRepository(ExpensesCategoryEntity)
export class ExpensesCategoryRepository extends Repository<ExpensesCategoryEntity> {
}
