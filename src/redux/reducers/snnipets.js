const snnipetsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_SNNIPETS':
            return {
                ...state,
                snnipets: action.payload
            }
            default:
                return state;
    }
}

export default snnipetsReducer;