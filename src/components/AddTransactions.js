import React, { useState } from "react";

export default function AddTransactions({ id, addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [type, setType] = useState("expense"); 

  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: id,
      text: text,
      amount: amount,
      date: date,
      type: type, 
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setDate("");
    setType("expense"); 
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter Text..."
            type="text"
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter Amount..."
            type="number"
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Enter Date..."
            type="date"
          />
        </div>
        <div className="form-control">
          <label>Type</label>
          <div>
            <input
              type="radio"
              value="expense"
              checked={type === "expense"}
              onChange={(event) => setType(event.target.value)}
            />
            <label>Expense</label>
            <input
              type="radio"
              value="income"
              checked={type === "income"}
              onChange={(event) => setType(event.target.value)}
            />
            <label>Income</label>
          </div>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}
