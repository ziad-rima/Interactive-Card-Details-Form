import Inputs from "./Inputs"
import Button from "./Button"
const Form = (props) => {
  return (
    <div className='form-container space-grotesk'>
      <Inputs 
        cardName={props.cardName}
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
