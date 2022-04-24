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

   async setMyMoneyValue(transactionValue: number, isIncome: boolean, idUser: number) {
      if (isIncome) {
         let myMoney = await this.myMoneyRepository.getLastValueMyMoney(idUser)
         if (myMoney.length === 0) {
            this.myMoneyRepository.save({
               money: transactionValue * (-1),
               idUser: idUser
            })

         }
         myMoney = +myMoney[myMoney.length - 1].money - transactionValue
         console.log(myMoney)
         return await this.myMoneyRepository.save({
            money: myMoney,
            idUser: idUser
         })
      }
      else {
         let myMoney = await this.myMoneyRepository.getLastValueMyMoney(idUser)
         if (myMoney.length === 0) this.myMoneyRepository.save({
            money: transactionValue,
            idUser: idUser
         })
         myMoney = myMoney[myMoney.length - 1].money + Number(transactionValue)
         return await this.myMoneyRepository.save({
            money: myMoney,
            idUser: idUser
         })
      }
   }


   async updateMyMoneyValue(transactionValue: number, isIncome: boolean, idUser: number) {
      if (isIncome) {
         let myMoney = await this.myMoneyRepository.getLastValueMyMoney(idUser)
         myMoney = +myMoney[myMoney.length - 1].money + transactionValue
         return await this.myMoneyRepository.save({
            money: myMoney,
            idUser: idUser
         })
      }
      else {
         let myMoney = await this.myMoneyRepository.getLastValueMyMoney(idUser)
         myMoney = +myMoney[myMoney.length - 1].money - transactionValue
         return await this.myMoneyRepository.save({
            money: myMoney,
            idUser: idUser
         })
      }
   }
}
