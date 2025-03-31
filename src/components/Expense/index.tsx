import React from 'react';
import { useAppDispatch } from "../store/hooks.ts";
import { removeExpense } from '../store/expensesSlice';
import "./index.css";
import { MyButton } from "../ui/button";
import { IExpenseProps } from "./index.interface";

export const Expense: React.FC<IExpenseProps> = ({ expense }) => {
    const dispatch = useAppDispatch();
    return (
        <div className="expense-card">
            <div className="expense-info">
                <div className="expense-title">
                    <span className="expense-name">{expense.name}</span>
                </div>
                <div className="expense-category">
                    {expense.category}
                </div>
            </div>

            <div className="expense-price">
                {expense.price.toLocaleString('ru-RU')}
                <span className="material-symbols-outlined currency-icon">currency_ruble</span>
            </div>

            <MyButton
                onClick={() => dispatch(removeExpense(expense.id))}
                className="remove-button"
            >
                Delete
            </MyButton>
        </div>
    );
};