import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExpense } from '../../components/Expense/index.interface';

interface ExpensesState {
    expenses: IExpense[];
    total: number;
}

const initialState: ExpensesState = {
    expenses: [
        { id: 1, name: "Продукты", price: 3500, category: "Еда", date: "2023-03-22" },
        { id: 2, name: "Бензин", price: 2500, category: "Транспорт", date: "2023-03-21" },
        { id: 3, name: "Кино", price: 1200, category: "Развлечения", date: "2023-03-20" },
        { id: 4, name: "Аренда", price: 25000, category: "Жилье", date: "2023-03-01" },
    ],
    total: 32200, // Сумма начальных расходов
};

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<IExpense>) => {
            state.expenses.push(action.payload);
            state.total += action.payload.price;
        },
        removeExpense: (state, action: PayloadAction<number>) => {
            const expense = state.expenses.find(e => e.id === action.payload);
            if (expense) {
                state.total -= expense.price;
                state.expenses = state.expenses.filter(e => e.id !== action.payload);
            }
        },
        sortExpenses: (state, action: PayloadAction<keyof IExpense>) => {
            state.expenses = [...state.expenses].sort((a, b) => {
                if (typeof a[action.payload] === 'string' && typeof b[action.payload] === 'string') {
                    return (a[action.payload] as string).localeCompare(b[action.payload] as string);
                }
                return 0;
            });
        },
    },
});

export const { addExpense, removeExpense, sortExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;