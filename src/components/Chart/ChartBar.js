import './ChartBar.css';
// import ExpenseForm from './ExpenseForm';
// import { useState } from 'react'

function ChartBar({ label, max, value, maxValue }) {
    let barFillHeight = '0%';

    if (max > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillHeight }}>
                    <div className="chart-bar__label">{label}</div>
                </div>
            </div>
        </div>
    );
}

export default ChartBar;