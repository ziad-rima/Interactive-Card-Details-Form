import BackCard from "./BackCard"
import FrontCard from "./FrontCard"
const Cards = (props) => {
  return (
    <div className='cards-component'>
      <BackCard />
      <FrontCard 
        cardName={props.cardName}
        cardNumber={props.cardNumber}
        month={props.month}
        year={props.year}
        valid={props.valid}
      />
    </div>
  )
}

export default Cards
