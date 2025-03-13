const Button = (props) => {
  return (
    <div className='button-container'>
      <button onClick={props.handleSubmit} className='confirm-button space-grotesk'>Confirm</button>
    </div>
  )
}

export default Button 
