import CardName from "./CardName"
import CardNumber from "./CardNumber"
import ExpDate from "./ExpDate"
const Inputs = (props) => {
  return (
    <div className='inputs-container'>
      <CardName 
        cardName={props.cardName}
        setCardName={props.setCardName}
      />
      <CardNumber 
        cardNumber={props.cardNumber} 
        setCardNumber={props.setCardNumber}
        errors={props.errors}
        setErrors={props.setErrors}
      />
      <ExpDate 
        month={props.month}
        setMonth={props.setMonth}
        year={props.year}
        setYear={props.setYear}
        cvc={props.cvc}
        setCvc={props.setCvc}
        errors={props.errors}
        setErrors={props.setErrors}
      />
    </div>
  )
}

export default Inputs
