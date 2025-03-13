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
