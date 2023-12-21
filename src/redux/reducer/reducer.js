const initialState = {
    data: null
}

const dataReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ALL_DATA':
            return {
                data: action.data
            }
        default:
            return state
    }
} 

export default dataReducer