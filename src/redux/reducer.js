import { ADD_TRANSACTION, DELETE_TRANSACTION,UPDATE_TRANSACTION } from "./actions"

const initialState = {
    transactions: []
}

const expenseTrackerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            }
            case UPDATE_TRANSACTION:
                return {
                  ...state,
                  transactions: state.transactions.map((transaction) =>
                    transaction.id === action.payload.id
                      ? { ...transaction, ...action.payload.updatedTransaction }
                      : transaction
                  ),
                };
            
      
        default: return state
    }
}

export default expenseTrackerReducer