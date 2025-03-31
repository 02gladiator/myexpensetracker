export interface IExpense {
    id: number;
    name: string;
    price: number;
    category: string;
    date: string;
}

export interface IExpenseProps {
    expense: IExpense;
    remove: (expense: IExpense) => void;
}