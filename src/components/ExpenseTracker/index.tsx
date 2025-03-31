import React from 'react';
import { Expense } from "../Expense";
import { ExpenseForm } from "../ExpenseForm";
import { MySelect } from "../ui/select";
import { ExpenseChart } from "../ExpenseChart";
import { ExpenseStatistics } from "../ExpenseStatistics";
import { useAppSelector,useAppDispatch } from "../store/hooks.ts";
import { sortExpenses } from '../store/expensesSlice';
import "./index.css";
import {IExpense} from "../Expense/index.interface.ts";

export const ExpenseTracker: React.FC = () => {
    const { expenses, total } = useAppSelector((state) => state.expenses);
    const dispatch = useAppDispatch();

    const chartData = expenses.reduce((acc, expense) => {
        const existing = acc.find(item => item.name === expense.category);
        if (existing) {
            existing.total += expense.price;
        } else {
            acc.push({ name: expense.category, total: expense.price });
        }
        return acc;
    }, [] as Array<{ name: string; total: number }>);

    return (
        <div className="expense-tracker-container">
            <div className="form-section sticky-form">
                <h2>Добавить расход</h2>
                <ExpenseForm></ExpenseForm>
            </div>

            <div className="content-section">
                <div className="chart-section">
                    <h2>График расходов</h2>
                    <ExpenseChart data={chartData} />
                </div>

                <div className="statistics-section">
                    <h2>Статистика</h2>
                    <ExpenseStatistics expenses={expenses} />
                </div>

                <div className="expenses-section">
                    <div className="expenses-header">
                        <h2>Мои расходы</h2>
                        <div className="total-amount">
                            Общая сумма: <span>{total.toLocaleString('ru-RU')} ₽</span>
                        </div>
                        <MySelect
                            onChange={(value) => dispatch(sortExpenses(value as keyof IExpense))}
                            options={[
                                { value: 'name', name: 'По названию' },
                                { value: 'category', name: 'По категории' },
                                { value: 'date', name: 'По дате' },
                                { value: 'price', name: 'По сумме' },
                            ]}
                            defaultValue="Сортировать"
                            variant="outlined"
                            size="small"
                        />
                    </div>

                    <div className="expenses-list">
                        {expenses.map(expense => (
                            <Expense key={expense.id} expense={expense} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};