const useReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
            case 'LOGOUT':
                return {
                    ...state,
                    user: undefined
                }
                default:
                    return state;
    }
}
export default useReducer;