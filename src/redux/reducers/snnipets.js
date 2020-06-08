const snnipetsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL':
            console.log('GET_ALL')
            return {
                ...state,
                snnipets: action.payload
            }
            default:
                return state;
    }
}

export default snnipetsReducer;