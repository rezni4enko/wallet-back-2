export interface CreateTransactionDto {
   readonly transactionCategory: string
   readonly transactionValue?: number
   readonly id?: number
   readonly comment?: string
}