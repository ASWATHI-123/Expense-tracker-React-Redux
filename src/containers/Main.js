import React, { Component } from "react";
import { connect } from "react-redux";

import AddTransactions from "../components/AddTransactions";
import { addTransaction, deleteTransaction, updateTransaction } from "../redux/actions"; 
import TransactionsList from "../components/TransactionsList";
import IncomeExpense from "../components/IncomeExpense";
import Newbalance from "../components/Newbalance";

export class Main extends Component {
  render() {
    const { transactions, addTransaction, deleteTransaction, updateTransaction} = this.props;
    return (
      <div className="container">
        <Newbalance transactions={transactions} />
        <IncomeExpense transactions={transactions}/>
        <TransactionsList
          transactions={transactions}
          deleteTransaction={(id) => deleteTransaction(id)}
          updateTransaction={(id, updatedTransaction) => updateTransaction(id, updatedTransaction)} 
         
        />
        <AddTransactions
          addTransaction={(transaction) => addTransaction(transaction)}
          id={transactions[0] ? transactions[0].id + 1 : 1}
       
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  updateTransaction: (id, updatedTransaction) => dispatch(updateTransaction(id, updatedTransaction)), // Add updateTransaction to mapDispatchToProps
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
