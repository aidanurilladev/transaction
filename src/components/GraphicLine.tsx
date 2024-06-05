import { useSelector } from "react-redux";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RootState } from "../store/store";
import { Transaction } from "../types";

const GraphicLine = () => {
  const transactions = useSelector(
    (state: RootState) => state.transaction.transactions
  );

  const filterByType: { [key: string]: Transaction[] } = {};
  transactions.forEach((transaction) => {
    if (!filterByType[transaction.type]) {
      filterByType[transaction.type] = [];
    }
    filterByType[transaction.type].push(transaction);
  });

  return (
    <div>
      <div className="block">
        <AreaChart
          width={730}
          height={250}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3" />

          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />

          {filterByType["cash out"] && (
            <Area
              type="monotone"
              data={filterByType["cash out"]}
              dataKey="amount"
              stroke="red"
              fillOpacity={0.2}
              fill="red"
            />
          )}

          {filterByType["cash in"] && (
            <Area
              type="monotone"
              data={filterByType["cash in"]}
              dataKey="amount"
              stroke="green"
              fillOpacity={0.2}
              fill="green"
            />
          )}
        </AreaChart>
      </div>
    </div>
  );
};

export default GraphicLine;
