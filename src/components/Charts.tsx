import React from "react";
import BarChart from "./BarChart";

const Charts: React.FC = () => {
    const data = [
        { name: "A", value: 50 },
        { name: "B", value: 100 },
        { name: "C", value: 150 },
        { name: "D", value: 200 },
        { name: "E", value: 250 },
    ];

    return (
        <div>
            <h2>My Cool Bar Chart</h2>
            <BarChart data={data} />
        </div>
    );
};

export default Charts;
