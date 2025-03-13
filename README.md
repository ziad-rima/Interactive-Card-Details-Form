# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- []()
- []()

## My process

I took the mobile-first approach for this project. First, I created the `components` folder that would hold all the components for this project:
- `Cards.jsx`
- `BackCard.jsx`
- `FrontCard.jsx`
- `CardLogo.jsx`
- `Form.jsx`
- `Inputs.jsx`
- `CardName.jsx`
- `Button.jsx`
- `CardNumber.jsx`
- `ExpDate.jx`
- `ThankYou.jsx`
- `ThankYouSVG.jsx`

- I started off by creating the front page which contains the form, the form is a parent component for `Inputs.jsx` and `Button.jsx`:
- `Form.jsx`:
```jsx
import Inputs from "./Inputs"
import Button from "./Button"
const Form = (props) => {
  return (
    <div className='form-container space-grotesk'>
      <Inputs 
        setCardName={props.setCardName}
        cardNumber={props.cardNumber}
        setCardNumber={props.setCardNumber}
        month={props.month}
        setMonth={props.setMonth}
        year={props.year}
        setYear={props.setYear}
        cvc={props.cvc}
        setCvc={props.setCvc}
        errors={props.errors}
        setErrors={props.setErrors}
      />
      <Button 
        handleSubmit={props.handleSubmit}
      />
    </div>
  )
}
export default Form
```

- `Inputs.jsx` component holds `CardName.jsx`, `CardNumber.jsx`, and `ExpDate.jsx` components. These are the inputs themeselves, each with one or more event handlers that are passed down from the `App.jsx` component. `CardName.jsx` for example:
```jsx
const CardName = (props) => {
  return (
    <div className='cardholder-name-container'>
      <label className="label-name" htmlFor="cardholder-name">CARDHOLDER NAME</label>
      <div className="input-container">
        <input onChange={(event) => props.setCardName(event.target.value)} type="text" placeholder="e.g. Jane Appleseed" name="cardholder-name" id="cardholder-name" />
      </div>
    </div>
  )
}

export default CardName

``` 

- The `Button.jsx` also has a `handleSubmit()` function that is passed down from `App.jsx`.
- `Button.jsx`:
```jsx
const Button = (props) => {
  return (
    <div className='button-container'>
      <button onClick={props.handleSubmit} className='confirm-button space-grotesk'>Confirm</button>
    </div>
  )
}
export default Button 
```

- Each input has its own state variable and state updater function, `cardNumber` for example, and its state updater function `setCardNumber`.

- For the `ExpDate.jsx` component, I handled inputs a bit inefficiently. Because a better approach would've been to dedicate a single component to each input, but instead, I managed all date-related inputs in a single component (`ExpDate.jsx`).

- I handled all validation logic in `App.jsx`, with two essential state variables, `valid` and `errors`. `errors` state variable captures any error that occurs in one or all of the inputs (except for the name), and `valid` is the final determinant, meaning it'll be set to `true` if all inputs are valid, or `false` otherwise.
- `App.jsx`:
```jsx
...
const [cardName, setCardName] = useState("");
const [cardNumber, setCardNumber] = useState("");
const [month, setMonth] = useState("");
const [year, setYear] = useState("");
const [cvc, setCvc] = useState("");
const [valid, setValid] = useState(false);
const [errors, setErrors] = useState({ cardNumber: "", month: "", year: "", cvc: "" });

const handleSubmit = () => {
  const newErrors = { ...errors };
  
  if (!month) newErrors.month = "Can't be blank";
  if (!year) newErrors.year = "Can't be blank";
  if (!cvc) newErrors.cvc = "Can't be blank";
  if (!cardNumber) newErrors.cardNumber = "Can't be blank";
  
  setErrors(newErrors);
  
  const hasErrors = Object.values(newErrors).some((error) => error !== "");
  if (!hasErrors && year && month && cvc && cardNumber && cardName) {
    setValid(true);
  } else {
    setValid(false);
  }
};
...
```

- Based on `valid`, I used conditional rendering to render the `ThankYou.jsx` component, to which I passed down the validated inputs. 
- `App.jsx`:
```jsx
...
{!valid 
  ? <Form 
  setCardName={setCardName}
  cardNumber={cardNumber}
  setCardNumber={setCardNumber}
  month={month}
  setMonth={setMonth}
  year={year}
  setYear={setYear}
  cvc={cvc}
  setCvc={setCvc}
  handleSubmit={handleSubmit}
  errors={errors}
  setErrors={setErrors}
  /> 
  : <ThankYou handleContinue={handleContinue}/>
}
...
```

- Also, I passed those inputs down to `FrontCard.jsx` component in order to display them on the card.
- `FrontCard.jsx`:
```jsx
import CardLogo from "./CardLogo"
const FrontCard = (props) => {
  return (
    <div className='front-card-container space-grotesk'>
      <img className="front-card" src="/images/bg-card-front.png" alt="front card image" />
      <div className="front-card-info">
        <CardLogo />
        <div className="card-owner-info">
            <p className="card-number">{props.valid ? props.cardNumber : "0000 0000 0000 0000"}</p>
            <div className="name-and-date">
                <p className="card-owner">{props.valid ? props.cardName : "JANE APPLESEED"}</p>
                <p className="date">{props.valid ? `${props.month}/${props.year}` : "00/00"}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default FrontCard
```

- There's also a continue button in `ThankYou.jsx` that, when clicked, calls a function `handleContinue` created in `App.jsx`. This function sets all input fields to empty strings along with all properties of the `errors` object state, and `valid` state variable to `false`. That way, it ensures that the `Form.jsx` component renders and is ready to take new inputs.
- `ThankYou.jsx`:
```jsx
import ThankYouSVG from "./ThankYouSVG"

const ThankYou = (props) => {
  return (
    <div className='thank-you-container space-grotesk'>
      <ThankYouSVG />
      <h1 className="thank-you-title">THANK YOU!</h1>
      <p className="thank-you-text">We've added your card details</p>
      <div className="continue-button-container">
        <button onClick={props.handleContinue} className="continue-button space-grotesk">Continue</button>
      </div>
    </div>
  )
}
export default ThankYou
```
- `App.jsx`:
```jsx
...
const handleContinue = () => {
  setCardName("");
  setCardNumber("");
  setMonth("");
  setYear("");
  setCvc("");
  setErrors({ cardNumber: "", month: "", year: "", cvc: "" });
  setValid(false);
}
...
```

- The last functionality I implemented was making use of local storage to store input values entered by the user so that when the page refreshes, the input values are not erased. 
- `ExpDate.jsx`:
```jsx
...
 useEffect(() => {
  const savedMonth = localStorage.getItem("month");
  const savedYear = localStorage.getItem("year");
  const savedCvc = localStorage.getItem("cvc");

  if (savedMonth) props.setMonth(savedMonth);
  if (savedYear) props.setYear(savedYear);
  if (savedCvc) props.setCvc(savedCvc);
}, [])

const handleMonth = (event) => {
  let value = event.target.value.replace(/\D/g, "").slice(0, 2);
  props.setMonth(value);
  localStorage.setItem("month", value);
  if (!value) {...}

const handleYear = (event) => {
  let value = event.target.value.replace(/\D/g, "").slice(0, 2);
  props.setYear(value);
  localStorage.setItem("year", value);
  if (!value) {...}

const handleCVC = (event) => {
  let value = event.target.value.replace(/\D/g, "").slice(0, 3);
  props.setCvc(value);
  localStorage.setItem("cvc", value);
  if (!value) {...}
...
```

- `CardName.jsx`:
```jsx
import { useEffect } from "react"

const CardName = (props) => {

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) props.setCardName(savedName);
  }, [props.setCardName])

  const handleName = (event) => {
    let value = event.target.value; 
    props.setCardName(value);
    localStorage.setItem("name", value);
  }

  return (
    <div className='cardholder-name-container'>
      <label className="label-name" htmlFor="cardholder-name">CARDHOLDER NAME</label>
      <div className="input-container">
        <input onChange={handleName} value={props.cardName} type="text" placeholder="e.g. Jane Appleseed" name="cardholder-name" id="cardholder-name" />
      </div>
    </div>
  )
}
export default CardName
```
- `CardNumber.jsx`:
```jsx
import { useState, useEffect, use } from "react"

const CardNumber = (props) => {
  
  useEffect(() => {
    const savedCardNumber = localStorage.getItem("cardNumber");
    if (savedCardNumber) props.setCardNumber(savedCardNumber);
  }, [])

  const [error, setError] = useState("")

  const handleInputChange = (event) => {
    let value = event.target.value;
    localStorage.setItem("cardNumber", value);

    value = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim();

    props.setCardNumber(value);
    setError("");
    props.setErrors((prev) => ({ ...prev, cardNumber: "" }));
  };

  const handleBlur = () => {
    if (!props.cardNumber) {
      setError("empty");
      props.setErrors((prev) => ({ ...prev, cardNumber: "Can't be blank" }));
    } else if (!/^\d{4}( \d{4}){3}$/.test(props.cardNumber)) {
      setError("invalid");
      props.setErrors((prev) => ({ ...prev, cardNumber: "Wrong format, numbers only" }));
    }
  };

  return (
    <div className="card-number-container">
      <label className="label-name" htmlFor="card-number">CARD NUMBER</label>
      <div className={`input-container  ${error && 'error-state'}`}>
        <input 
          type="text" 
          placeholder="e.g. 1234 5678 9123 0000" 
          name="card-number" 
          id="card-number" 
          maxLength="19"
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={props.cardNumber}
        />
      </div>
      <div className="error-container space-grotesk">
        {error === "invalid" && <p className="error-text">Wrong format, numbers only</p>}
        {error === "empty" && <p className="error-text">Can't be blank</p>}
      </div>
    </div>
  )
}
export default CardNumber
```
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

## Author

- GitHub - [ziad-rima](https://github.com/ziad-rima)
- Frontend Mentor - [@ziad-rima](https://www.frontendmentor.io/profile/ziad-rima)
- X - [@rima4082](https://x.com/rima4082)

