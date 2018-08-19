import { createStore} from 'redux';

// action generators - functions that retyrbs action objects 
// Prefered, because typos is more transparent

console.log(add({ a: 1, b: 12}));

// const incrementCount = (payload = {}) => {
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy :1
//     };
// };
// destructured of functions
const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    };
};

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
   type: 'SET',
   count
});

const resetCount = () => ({
    type: 'RESET',
    count: 0
});


// set state to default state object
const countReducer = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy == 'number' ? acrion.decrementBy : 1;
            return {
                count: state.count - action.decrementBy;
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

store.dispatch(incrementCount({ incrementBy: 5}));

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