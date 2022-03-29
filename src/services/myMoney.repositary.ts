import { MyMoneyEntity } from './../entity/myMoney.entity';
import { Repository, EntityRepository } from 'typeorm'


@EntityRepository(MyMoneyEntity)
export class MyMoneyRepository extends Repository<MyMoneyEntity> {


   getLastValueMyMoney(userId: number) {
      return this.query(`
          select *
          from money
          where "idUser" = ${userId}
                `)
   }
}
