import  useInput from '../hooks/useInput';

const SimpleInput = (props) => {

  const {
      value: enteredName,
      isValid: nameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangeHandler,
      valueBlurHandler: nameBlurHandler,
      resetInput: resetNameInput
  } = useInput(value => value.trim !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput
} = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if(nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if(!nameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };
  
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          />
          {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Email ID</label>
        <input
          type='email'
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          />
          {emailInputHasError && <p className="error-text">Please Enter Valid Email_Id</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
