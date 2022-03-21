import { TransactionEntity } from 'src/entity/transaction.entity';
import { Repository, EntityRepository } from 'typeorm'


@EntityRepository(TransactionEntity)
export class TransactionRepository extends Repository<TransactionEntity> {
}
