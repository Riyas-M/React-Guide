import { configureStore,  } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import authReducer from './authSlice';



// const counterReducer = (state = intitalState, action) => {

//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }


//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.amt
//         };
//     }

//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if(action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }

//     return state;
// };

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;