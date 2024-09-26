import React, { useState } from "react";

export default function Transaction({ transaction, deleteTransaction, updateTransaction }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTransaction, setUpdatedTransaction] = useState({
    text: transaction.text,
    date: transaction.date,
    amount: transaction.amount
  });

  let sign = transaction.amount >= 0 ? "+" : "-";

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTransaction({
      ...updatedTransaction,
      [name]: value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
  
    updateTransaction(transaction.id, updatedTransaction);
    setIsEditing(false); 
  };

  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Title</th>
                <th style={{ textAlign: "center" }}>Date</th>
                <th style={{ textAlign: "right" }}>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    name="text"
                    value={updatedTransaction.text}
                    onChange={handleEditChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <input
                    type="date"
                    name="date"
                    value={updatedTransaction.date}
                    onChange={handleEditChange}
                  />
                </td>
                <td style={{ textAlign: "right" }}>
                  <input
                    type="number"
                    name="amount"
                    value={updatedTransaction.amount}
                    onChange={handleEditChange}
                  />
                </td>
                <td style={{ textAlign: "right" }}>
                  <button type="submit">Save</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      ) : (
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Title</th>
              <th style={{ textAlign: "center" }}>Date</th>
              <th style={{ textAlign: "right" }}>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "left" }}>{transaction.text}</td>
              <td style={{ textAlign: "center" }}>{transaction.date}</td>
              <td style={{ textAlign: "right" }}>
                {sign}${Math.abs(transaction.amount)}
              </td>
              <td style={{ textAlign: "right" }}>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </li>
  );
}
