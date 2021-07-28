export const counterReducers = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return { ...state, value: state.value + 1 };
        case 'DECREAMENT':
            return state.value - 1;
        default:
            return state;
    }
}
