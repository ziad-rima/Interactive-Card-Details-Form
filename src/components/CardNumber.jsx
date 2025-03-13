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
