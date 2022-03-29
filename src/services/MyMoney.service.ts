import { MyMoneyRepository } from './myMoney.repositary';
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from 'src/dto/create-transaction.dto';

@Injectable()
export class MyMoneyService {

   constructor(private readonly myMoneyRepository: MyMoneyRepository) { }

   async create(dto: CreateTransactionDto) {
      const myMoney = await this.myMoneyRepository.save(dto)
      return myMoney
   }

   async getAll() {
      const myMoney = await this.myMoneyRepository.find()
      return myMoney
   }

   async getOne(id: number) {
      const myMoney = await this.myMoneyRepository.find({ id })
      return myMoney
   }

   async delete(id: number) {
      return await this.myMoneyRepository.delete({ id })
   }

   async setMyMoneyValue(transactionValue: number, isIncome: boolean, idUser: number) {
      if (isIncome) {
         let myMoney = await this.myMoneyRepository.getLastValueMyMoney(idUser)
         myMoney = myMoney[myMoney.length - 1].money - transactionValue
         return await this.myMoneyRepository.save({
            money: myMoney,
            idUser: idUser
         })
      }
      else {
         let myMoney = await this.myMoneyRepository.getLastValueMyMoney(idUser)
         myMoney = +myMoney[myMoney.length - 1].money + transactionValue
         return await this.myMoneyRepository.save({
            money: myMoney,
            idUser: idUser
         })
      }
   }
}
