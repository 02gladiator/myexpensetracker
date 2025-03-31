import {IExpense} from "../Expense/index.interface.ts";

export interface IExpenseFormProps {
    create: (expense: IExpense) => void;
}