import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const Home: React.FC = () => {
    return (
        <div className="home-page">
            <h1>Добро пожаловать в трекер расходов</h1>
            <p>
                Простое и удобное приложение для отслеживания ваших финансов.
                Контролируйте расходы, анализируйте статистику и экономьте деньги.
            </p>
            <Link to="/expenses" className="cta-button">
                Начать использовать
            </Link>

            <div className="features">
                <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Подробная статистика</h3>
                    <p>Наглядные графики и диаграммы ваших расходов по категориям</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">💸</div>
                    <h3>Учет расходов</h3>
                    <p>Легко добавляйте и удаляйте траты, сортируйте по категориям</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">📱</div>
                    <h3>Доступно везде</h3>
                    <p>Работает на всех устройствах, синхронизация между платформами</p>
                </div>
            </div>
        </div>
    );
};