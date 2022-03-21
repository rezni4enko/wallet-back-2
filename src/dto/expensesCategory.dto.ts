export interface ExpensesCategoryDto {
   readonly transactionCategory: string
   readonly isIncome: boolean
   readonly id?: number
   readonly inMainPage: boolean
   readonly defaultValue: boolean
}