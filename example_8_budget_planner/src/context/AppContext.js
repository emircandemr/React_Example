export const initialState = {
    budget : 2000,
    expenses : []
    }

const Reducer = (state,action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses:[action.payload, ...state.expenses]
            }
        case "REMOVE_EXPENSE":
            return{
                ...state,
                expenses : [...state.expenses].filter( (expense) => expense.id !== action.payload)
            }
        default:
            return state;
    }
}

export default Reducer