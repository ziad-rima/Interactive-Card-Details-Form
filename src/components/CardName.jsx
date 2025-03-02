const CardName = () => {
  return (
    <div className='cardholder-name-container'>
      <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
      <input type="text" placeholder="e.g. Jane Appleseed" name="cardholder-name" id="cardholder-name" />
    </div>
  )
}

export default CardName
