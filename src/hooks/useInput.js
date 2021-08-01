/* State Based Validation */

// import { useState } from 'react';

// const useInput = (validateVal) => {

//     const [enteredValue, setEnteredValue] = useState('');
//     const [isTouched, setIsTouched] = useState(false);

//     const isValidValue = validateVal(enteredValue);
//     const hasError = !isValidValue && isTouched;


//     const valueChangeHandler = (event) => {
//         setEnteredValue(event.target.value);
//     };
    
//     const valueBlurHandler = (event) => {
//        setIsTouched(true);
//     };

//     const resetInput = () => {
//         setEnteredValue('');
//         setIsTouched(false);
//     };

//     return {
//         value: enteredValue,
//         isValid: isValidValue,
//         hasError,
//         valueChangeHandler,
//         valueBlurHandler,
//         resetInput
//     }
// };

// export default useInput;



/* Reducer Based Validation */
import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false,
};

const inputStateReducer = (state, action)  => {
    if(action.type === 'input') {
        return {value: action.value, isTouched: state.isTouched}
    } else if(action.type === 'blur') {
        return {value: state.value, isTouched: true}
    } else {
        return { isTouched: false, value: '' };
    }
    return inputStateReducer;
};

const useInput = (validateVal) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const isValidValue = validateVal(inputState.value);
    const hasError = !isValidValue && inputState.isTouched;


    const valueChangeHandler = (event) => {
        dispatch({type: 'input', value: event.target.value});
    };
    
    const valueBlurHandler = (event) => {
       dispatch({type: 'blur'});
    };

    const resetInput = () => {
        dispatch({type: 'reset'});
    };

    return {
        value: inputState.value,
        isValid: isValidValue,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        resetInput,
    }
};

export default useInput;