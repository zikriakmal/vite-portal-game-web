import './GameCard.css'

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.thumbnail} alt={game.title} className="game-card__thumbnail" />
      <div className="game-card__body">
        <h2 className="game-card__title">{game.title}</h2>
        <p className="game-card__description">{game.description}</p>
        <a
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="game-card__button"
        >
          Play
        </a>
      </div>
    </div>
  )
}

export default GameCard
