import { useEffect, useState } from "react";
import { Transaction } from "../types";

const Balance = () => {
   const [balance, setBalance] = useState(0);
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transactions") || "[]");

    const balance = data.reduce((acc: number, el: Transaction) => {
      if (el.type == "cash in") {
        return acc + el.amount;
      }
      return acc - el.amount;
    }, 0);
    setBalance(balance);
  }, []);


  return (
    <div>
      <h1>Balance: {balance}</h1>
    </div>
  );
};

export default Balance;
