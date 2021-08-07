import { useRef, useState } from 'react';

import classes from "./checkout.module.css";


const isEmpty = value => value.trim() === '';
const isFiveCharacters = value => value.trim().length === 5;

const Checkout = (props) => {

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (evt) => {
        evt.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveCharacters(enteredPostalCode);


        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode:  enteredPostalCodeIsValid
        });

        const formIsValid = (enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid);

        if(!formIsValid) return;
        props.onSubmit({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        });
    }

    const nameInputClasses = `${classes.control} ${formInputsValidity.name ?  '' : classes.invalid}`;
    const streetInputClasses = `${classes.control} ${formInputsValidity.street ?  '' : classes.invalid}`;
    const cityInputClasses = `${classes.control} ${formInputsValidity.city ?  '' : classes.invalid}`;
    const postalCodeInputClasses = `${classes.control} ${formInputsValidity.postalCode ?  '' : classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please Enter a Valid Name</p>}
            </div>
            <div className={streetInputClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputsValidity.street && <p>Please Enter a Valid Street Name</p>}
            </div>
            <div className={postalCodeInputClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal'ref={postalCodeInputRef}  />
                {!formInputsValidity.postalCode && <p>Please Enter a Valid Postal Code</p>}
            </div>
            <div className={cityInputClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city'ref={cityInputRef}  />
                {!formInputsValidity.city && <p>Please Enter a Valid CityName</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );

};


export default Checkout;