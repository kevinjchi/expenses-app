import { createStore} from 'redux';

// set state to default state object
const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;
    }
});

// I'd like to increment the count
store.dispatch({
    type: 'INCREMENT'
});
// dispatch count to 2
store.dispatch({
    type: 'DECREMENT'
});
// reset count to 0
store.dispatch({
    type: 'RESET'
});

console.log(store.getState())
console.log('101'); 