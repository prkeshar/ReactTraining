let initialState = {counter : 0};

export function reducer(state=initialState, action) {
    if(action.type === 'INC') {
        return {counter: state.counter+1};
    }
    else if(action.type === 'DEC') {
        return {counter: state.counter-1};
    }
    else {
        return state;   
    }
}