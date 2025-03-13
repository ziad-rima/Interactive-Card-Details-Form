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
