import React, { useState } from 'react';
import { useAppDispatch } from "../store/hooks.ts";
import { addExpense } from '../store/expensesSlice';
import { MyInput } from "../ui/input";
import { MyButton } from "../ui/button";
import "./index.css"
import {IExpenseFormProps} from "./index.interface.ts";

const CATEGORIES = [
    "Еда",
    "Транспорт",
    "Жилье",
    "Развлечения",
    "Здоровье",
    "Одежда",
    "Техника",
    "Образование",
    "Другое"
];

export const ExpenseForm: React.FC<IExpenseFormProps> = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [date, setDate] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newExpense = {
            id: Date.now(),
            name,
            category: category || "Другое",
            date: date || new Date().toISOString().split('T')[0],
            price: Number(price),
        };
        dispatch(addExpense(newExpense));
        setName("");
        setCategory("");
        setPrice(0);
        setDate("");
    };

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <h2 className="form-title">Добавить новую трату</h2>

            <div className="form-group">
                <label className="form-label">Название</label>
                <MyInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Категория</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="category-select"
                >
                    <option value="">Выберите категорию</option>
                    {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Стоимость</label>
                    <div className="price-input">
                        <MyInput
                            type="number"
                            min={0}
                            step="0.01"
                            value={price || ""}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            placeholder="0.00"
                            required
                        />
                        <span className="currency-symbol">₽</span>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Дата</label>
                    <MyInput
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="date-input"
                    />
                </div>
            </div>

            <MyButton
                type="submit"
                className="submit-button"
                variant="contained"
            >
                Добавить трату
            </MyButton>
        </form>
    );
};