import CardLogo from "./CardLogo"
const FrontCard = () => {
  return (
    <div className='front-card-container space-grotesk'>
      <img className="front-card" src="/images/bg-card-front.png" alt="front card image" />
      <div className="front-card-info">
        <CardLogo />
        <div className="card-owner-info">
            <p className="card-number">0000 0000 0000 0000</p>
            <div className="name-and-date">
                <p className="card-owner">JANE APPLESEED</p>
                <p className="date">00/00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FrontCard
