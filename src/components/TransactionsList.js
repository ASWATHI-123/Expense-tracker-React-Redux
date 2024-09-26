import React from "react";
import Transaction from "./Transaction";

export default function TransactionsList({ transactions, deleteTransaction, updateTransaction }) {

  transactions = transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      <h3>Transactions</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={(id) => deleteTransaction(id)}
            updateTransaction={updateTransaction} 
          />
        ))}
      </ul>
    </div>
  );
}
