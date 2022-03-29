export interface CreateTransactionDto {
   readonly transactionCategory: string
   readonly transactionValue?: number
   readonly id?: number
   readonly comment?: string
   readonly idUser: number
   readonly isIncome: boolean
   readonly created_a: any
}