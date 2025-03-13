import Cards from "./components/Cards"
import Form from "./components/Form"
import ThankYou from "./components/ThankYou"
import { useState } from "react"
const App = () => {
  
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
  

  const handleContinue = () => {
    setCardName("");
    setCardNumber("");
    setMonth("");
    setYear("");
    setCvc("");
    setErrors({ cardNumber: "", month: "", year: "", cvc: "" });
    setValid(false);
  }

  return (
    <div className='main-component'>
      <Cards 
        cardName={cardName}
        cardNumber={cardNumber}
        month={month}
        year={year}
        valid={valid}
      />
      {!valid 
      ? <Form 
      cardName={cardName}
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
      
    </div>
  )
}

export default App
