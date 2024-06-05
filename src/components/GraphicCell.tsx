import { useSelector } from "react-redux";
import { Cell, Pie, PieChart } from "recharts";
import { RootState } from "../store/store";
import { useEffect, useRef, useState } from "react";

interface DataForPie {
  name: string;
  value: number;
}

const GraphicCell = () => {
  
  const [data, setData] = useState<DataForPie[]>([]);

  const transactions = useSelector(
    (state: RootState) => state.transaction.transactions
  );

  const colors = useRef([
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f0e",
    "#ff5d8f",
    "#888888",
    "#82ca9d",
  ]);

  useEffect(() => {
    const countByCategory: { [key: string]: number } = {};

    transactions.forEach((transaction) => {
      if (!countByCategory[transaction.category]) {
        countByCategory[transaction.category] = 0;
      }
      countByCategory[transaction.category]++;
    });

    const dataForPie = Object.keys(countByCategory).map((category) => ({
      name: category,
      value: countByCategory[category],
    }));

    setData(dataForPie);
  }, [transactions]);

  return (
    <div>
      <div className="cell">
        <PieChart width={730} height={250}>
          <Pie
            dataKey={"value"}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ name }) => name}
            fill="#8884d8"
            labelLine={true}
          >
            {data.map((el, index) => (
              <Cell
                key={`cell-${el}`}
                fill={colors.current[index % colors.current.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default GraphicCell;
