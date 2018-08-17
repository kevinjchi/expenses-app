import { createStore} from 'redux';

// set state to default state object
const store = createStore((state = {count: 0}) => {
    return state;
});

console.log(store.getState())

console.log('101'); 