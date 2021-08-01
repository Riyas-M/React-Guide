import  useInput from '../hooks/useInput';

const BasicForm = (props) => {

  const isNotEmpty = (value) => value.trim() !== '';
  const isEmail = (value) => (value.trim() !== '' && value.includes('@'));

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    resetInput: resetFirstNameInput
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    resetInput: resetLastNameInput
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput
  } = useInput(isEmail);

  let formIsValid = false;

  if(firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if(!formIsValid) {
      return;
    }

    console.log('Submitted');
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstname'>First Name</label>
          <input type='text' id='firstname'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && <p className="error-text">Please Enter First Name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameHasError && <p className="error-text">Please Enter Last Name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">Please Enter Valid Email_Id</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
