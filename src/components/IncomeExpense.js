import React from "react";

export default function IncomeExpense({ transactions }) {
  // Filter for income transactions and sum their amounts
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  // Filter for expense transactions and sum their amounts
  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">${expenses}</p>
      </div>
    </div>
  );
}
