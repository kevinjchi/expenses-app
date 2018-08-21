import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default};

// set returns a promise

// firebase.database().ref().set({
//     name: 'Kevin Jeu Chiem',
//     age: 12
// }).then( () => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log('this failed', e);
// });

// //remove
// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data wiped');
//     }).catch((e) => {
//         console.log('not wiped', e);
//     });

// //update
// database.ref().update({
//     name: 'kevinjchi',
//     age: 15
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();

//     })
//     .catch((e) => {
//         console.log('error fetching data', e);
//     });

// // runs over and over again
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref().off();
// }, 7000);


// const notes = [{
//     id: '15',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '78a',
//     title: 'seond note',
//     body: 'this is my third note'
// }];

// database.ref('notes').push({
//     title: 'dod',
//     body: 'go for a run'
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childsnapshot) => {
//             expensees.push({
//                 id: childsnapshot.key,
//                 ...childsnapshot.val()
//             });
//         });
//     });