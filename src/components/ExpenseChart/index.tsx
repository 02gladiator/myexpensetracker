import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { ExpenseChartProps } from "./index.interface";
import './index.css';

const COLORS = ['#4a90e2', '#6c757d', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6610f2'];

export const ExpenseChart:React.FC<ExpenseChartProps> = ({ data }: ExpenseChartProps) => {
    // Сортируем данные по убыванию суммы
    const sortedData = [...data].sort((a, b) => b.total - a.total);

    // Форматируем подписи для Tooltip
    const formatTooltip = (value: number) => {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(value);
    };

    return (
        <div className="expense-chart">
            <h2 className="chart-title">Распределение расходов по категориям</h2>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={sortedData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                        layout="vertical"
                    >
                        <XAxis
                            type="number"
                            tickFormatter={(value) => new Intl.NumberFormat('ru-RU').format(value)}
                        />
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={100}
                            tick={{ fontSize: 14 }}
                        />
                        <Tooltip
                            formatter={formatTooltip}
                            contentStyle={{
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                            }}
                        />
                        <Legend
                            formatter={(value) => <span className="legend-text">{value}</span>}
                        />
                        <Bar
                            dataKey="total"
                            name="Сумма расходов"
                            radius={[0, 4, 4, 0]}
                        >
                            {sortedData.map((_entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};