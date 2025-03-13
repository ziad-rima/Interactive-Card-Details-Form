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
