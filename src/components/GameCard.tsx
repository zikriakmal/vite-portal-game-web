import './GameCard.css'
import type { Game } from '../data/games'

interface GameCardProps {
  game: Game
}

function GameCard({ game }: GameCardProps) {
  return (
    <div className="game-card">
      <div className="game-card__thumbnail-wrap">
        <img src={game.thumbnail} alt={game.title} className="game-card__thumbnail" />
        {game.engine && <span className="game-card__badge">{game.engine}</span>}
      </div>
      <div className="game-card__body">
        <h3 className="game-card__title">{game.title}</h3>
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
