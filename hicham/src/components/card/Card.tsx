import './card.css'

export default function Card({
  card,
  handleChoice,
  flipped,
  disabled,
}: any) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.img} alt="card front" />
        <img
          className="back"
          src={require('../../assets/images/memory.png')}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  )
}
