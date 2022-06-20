import useInput from "../../../hooks/use-input";

const ContactForm = (props) => {
    const isNotEmpty = value => value.trim().length !== 0;

    const {
        value: firstnameEntered,
        isValid: firstnameIsValid,
        hasError: firstnameHasError,
        valueInputChangeHandler: firstnameChangeHandler,
        valueInputBlurHandler: firstnameBlurHandler,
        reset: resetFirstname,
    } = useInput(isNotEmpty);

    const {
        value: lastnameEntered,
        isValid: lastnameIsValid,
        hasError: lastnameHasError,
        valueInputChangeHandler: lastnameChangeHandler,
        valueInputBlurHandler: lastnameBlurHandler,
        reset: resetLastname,
    } = useInput(isNotEmpty);

    const {
        value: emailEntered,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueInputChangeHandler: emailChangeHandler,
        valueInputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isNotEmpty);

    const {
        value: phoneNumberEntered,
        isValid: phoneNumberIsValid,
        hasError: phoneNumberHasError,
        valueInputChangeHandler: phoneNumberChangeHandler,
        valueInputBlurHandler: phoneNumberBlurHandler,
        reset: resetPhoneNumber,
    } = useInput(isNotEmpty);


    let validForm = false;
    if(firstnameIsValid &&
        lastnameIsValid &&
        emailIsValid &&
        phoneNumberIsValid) {
        validForm = true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validForm) {
            return;
        }

        resetFirstname();
        resetLastname();
        resetEmail();
        resetPhoneNumber();

        props.onSubmit({
            firstname: firstnameEntered,
            lastname: lastnameEntered,
            email: emailEntered,
            phoneNumber: phoneNumberEntered
        });
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name</label>
        <input
            type='text'
            id='firstname'
            value={props.firstname ? props.firstname : firstnameEntered}
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurHandler}
        />
        {firstnameHasError && <p>Please enter a valid first name</p>}
        <label htmlFor="lastname">Last name</label>
        <input
            type="text"
            id="lastname"
            value={props.lastname ? props.lastname : lastnameEntered}
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
        />
        {lastnameHasError && <p>Please enter a valid last name</p>}
        <label htmlFor="email">Email</label>
        <input
            type="text"
            id="email"
            value={props.email ? props.email : emailEntered}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
        />
        {emailHasError && <p>Please enter a valid email</p>}
        <label htmlFor="phoneNumber">Phone number</label>
        <input
            type="text"
            id="firstname"
            value={props.phoneNumber ? props.phoneNumber : phoneNumberEntered}
            onChange={phoneNumberChangeHandler}
            onBlur={phoneNumberBlurHandler}
        />
        {phoneNumberHasError && <p>Please enter a valid phone number</p>}
        <button type="submit" disabled={!validForm}>Submit</button>
    </form>
}

export default ContactForm;