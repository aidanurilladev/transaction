import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../store/slices/transactionSlice";
import { addIncome, addExpense } from "../store/slices/balanceSlice";
import { Transaction } from "../types";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";

const AddTransaction = () => {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const nav = useNavigate();
  
  function handleSubmit() {
    if (!type || !category || !amount || !description || !date) {
      alert("Заполните все поле");
      return;
    }
    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      category,
      amount,
      description,
      date,
    };
    dispatch(addTransaction(newTransaction));

    if (type === "cash in") {
      dispatch(addIncome(amount));
    } else if (type === "cash out") {
      dispatch(addExpense(amount));
    }

    setType("");
    setAmount(0);
    setCategory("");
    setDescription("");
    setDate("");

    nav("/");
  }

  return (
    <div>
      <div className="container">
        <div className="continent">
          <div className="block2">
            <DropDown
              data={["Cash in", "Cash out"]}
              onSelect={(value) => setType(value.toLowerCase())}
            />

            <input
              placeholder="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            />

            {type === "cash in" && (
              <DropDown
                data={["Salary", "monthly stipend", "prepaid expense"]}
                onSelect={(value) => setCategory(value)}
              />
            )}

            {type === "cash out" && (
              <DropDown
                data={[
                  "Utilities",
                  "Transportation",
                  "Entertainment",
                  "Rent",
                  "Food",
                  "Internet & Phone ",
                  "Shopping",
                  "Dinning out",
                  "Groceries",
                ]}
                onSelect={(value) => setCategory(value)}
              />
            )}

            <input
              placeholder="Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button
              style={{
                width: "150px",
                background: "#8884d8",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={() => handleSubmit()}
            >
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
