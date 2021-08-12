/* Functional Component */

import { useSelector, useDispatch} from 'react-redux';
import { counterActions} from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch =  useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const toggleCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increase by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;







/* Class-Based Component */

// import { Component } from 'react';
// import { connect } from 'react-redux';
// import classes from './Counter.module.css';

// class Counter extends Component{

//  toggleCounterHandler = () => {};

//   incrementCounterHandler = () => {
//     this.props.increment();
//   };

//   decrementCounterHandler = () => {
//     this.props.decrement();
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementCounterHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementCounterHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//       increment: () => dispatch({type: 'increment'}),
//       decrement: () => dispatch({type: 'decrement'})
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
