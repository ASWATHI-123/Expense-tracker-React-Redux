import React from "react";

export default function Newbalance({ transactions }) {
  // Calculate income and expenses separately
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  // Calculate the total balance (income - expenses)
  const total = income - expenses; // Expenses are already negative if input correctly

  return (
    <div>
      <h4>Your Balance:</h4>
      <h1>${total}</h1>
    </div>
  );
}
