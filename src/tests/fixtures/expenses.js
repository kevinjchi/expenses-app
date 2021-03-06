import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Food',
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'credit',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

// total 194195
export default expenses;