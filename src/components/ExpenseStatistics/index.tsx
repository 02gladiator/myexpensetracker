import { useMemo } from 'react';
import { ExpenseStatisticsProps } from "./index.interface";
import './index.css';

export const ExpenseStatistics = ({ expenses }: ExpenseStatisticsProps) => {
    const total = useMemo(() =>
            expenses.reduce((sum, e) => sum + e.price, 0),
        [expenses]
    );

    const categoryTotals = useMemo(() => {
        const map = new Map<string, number>();
        expenses.forEach(e => map.set(e.category, (map.get(e.category) || 0) + e.price));
        return Array.from(map.entries())
            .sort((a, b) => b[1] - a[1]);
    }, [expenses]);

    const mostExpensiveCategory = useMemo(() => {
        if (categoryTotals.length === 0) return null;
        return categoryTotals.reduce((max, current) =>
            current[1] > max[1] ? current : max
        );
    }, [categoryTotals]);

    const averagePerCategory = useMemo(() => {
        if (categoryTotals.length === 0) return 0;
        return total / categoryTotals.length;
    }, [total, categoryTotals]);

    return (
        <div className="expense-statistics">
            <h2 className="statistics-title">Статистика расходов</h2>

            <div className="statistics-grid">
                <div className="stat-card total-card">
                    <h3>Общая сумма</h3>
                    <div className="amount">{total.toLocaleString('ru-RU')} ₽</div>
                </div>

                {mostExpensiveCategory && (
                    <div className="stat-card category-card">
                        <h3>Самая затратная категория</h3>
                        <div className="category-name">{mostExpensiveCategory[0]}</div>
                        <div className="amount">{mostExpensiveCategory[1].toLocaleString('ru-RU')} ₽</div>
                    </div>
                )}

                <div className="stat-card average-card">
                    <h3>Средний расход</h3>
                    <div className="amount">{averagePerCategory.toLocaleString('ru-RU')} ₽</div>
                    <div className="subtext">на категорию</div>
                </div>
            </div>

            <div className="category-breakdown">
                <h3>Распределение по категориям</h3>
                <div className="category-bars">
                    {categoryTotals.map(([category, categoryTotal]) => {
                        const percentage = (categoryTotal / total) * 100;
                        return (
                            <div key={category} className="category-bar">
                                <div className="category-info">
                                    <span className="category-name">{category}</span>
                                    <span className="category-amount">
                                        {categoryTotal.toLocaleString('ru-RU')} ₽ ({percentage.toFixed(1)}%)
                                    </span>
                                </div>
                                <div className="bar-container">
                                    <div
                                        className="bar-fill"
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};