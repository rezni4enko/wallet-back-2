import { IncomeCategoryEntity } from 'src/entity/incomeCategory.entity';
import { Repository, EntityRepository } from 'typeorm'


@EntityRepository(IncomeCategoryEntity)
export class IncomeCategoryRepository extends Repository<IncomeCategoryEntity> {
}
