import { createStore} from 'redux';

// set state to default state object
const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy == 'number' ? acrion.decrementBy : 1;
            return {
                count: state.count - decrementBy;
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: state.count 
            };
        default: 
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// I'd like to increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

unsubscribe();
// dispatch count to 2
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
// reset count to 0
store.dispatch({
    type: 'RESET'
});


store.dispatch({
    type: 'SET',
    count: 101
});

console.log(store.getState())
console.log('101'); 