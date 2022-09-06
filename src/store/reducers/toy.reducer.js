const INITIAL_STATE = {
    toys: null,
    filterBy: null,
    isLoading: false
}

// action = {type: SET_TOYS, toys: [...]}
export function toyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_TOYS':
            return {
                ...state,
                toys: action.toys
            }
        case 'ADD_TOY':
            return {
                ...state,
                toys: [...state.toys, action.toy]
            }
        case 'REMOVE_TOY':
            return {
                ...state,
                toys: state.toys.filter(toy => toy._id !== action.toyId)
            }
        case 'UPDATE_TOY':
            return {
                ...state,
                toys: state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}