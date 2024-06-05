import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {  useMemo, useRef, useState } from "react";

const Table:React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.transaction.transactions
  );
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = useRef(7);

  const currentTransactions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage.current;
    const end = start + itemsPerPage.current;
    const newTransactions = transactions.slice(start, end);

    return newTransactions;
  }, [currentPage]);

  const numbers = useMemo(() => {
    const pageCount = Math.ceil(transactions.length / itemsPerPage.current);

    return [...Array(pageCount + 1).keys()].slice(1);
    // return Array(pageCount)
    //   .fill(1)
    //   .map((el, idx) => idx + 1);
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);
  const prevPage = () => setCurrentPage((currentPage) => currentPage - 1);

  return (
    <div>
      <div className="table">
        <table
          border={1}
          align="center"
          bgcolor="white"
          cellPadding="10"
          cellSpacing="20"
        >
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((el) => (
              <tr key={el.id}>
                <td>{el.type}</td>
                <td>{el.amount}</td>
                <td>{el.category}</td>
                <td>{el.description}</td>
                <td>{new Date(el.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="page-btn" onClick={prevPage}>
          Prev Page
        </button>
        {numbers.map((el, index) => (
          <button
            style={{
              fontSize: "20px",
              padding: " 0 10px",
              margin: " 0 8px",
            }}
            key={el}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button className="page-btn" onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Table;
