import './Chart.css';
import ChartBar from './ChartBar';
// import { useState } from 'react'

function Chart({ dataPoints }) {

    const dataPointsValues = dataPoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {dataPoints.map(({ label, value }) =>
                <ChartBar
                    key={label}
                    value={value}
                    maxValue={totalMaximum}
                    label={label}
                />
            )}
        </div>
    );
}

export default Chart;