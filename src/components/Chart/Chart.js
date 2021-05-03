import './Chart.css';
import ChartBar from './ChartBar';
// import { useState } from 'react'

function Chart({ dataPoints }) {


    return (
        <div className="chart">
            {dataPoints.map(({ label, value }) =>
                <ChartBar
                    key={label}
                    value={value}
                    maxValue={null}
                    label={label}
                />
            )}
        </div>
    );
}

export default Chart;