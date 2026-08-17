import type { Game } from '../data/games'

interface GameCardProps {
  game: Game
}

function GameCard({ game }: GameCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface transition-[transform,box-shadow,border-color] duration-250 ease-out hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_16px_40px_rgba(134,59,255,0.25)]">
      <div className="relative overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="block h-[180px] w-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.06]"
        />
        {game.engine && (
          <span className="absolute top-3 right-3 rounded-full border border-surface-border bg-[rgba(12,12,20,0.75)] px-2.5 py-1 font-display text-[0.7rem] font-semibold tracking-[0.04em] text-accent-soft backdrop-blur-md">
            {game.engine}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-[18px]">
        <h3 className="font-display text-[1.2rem] font-semibold text-text">{game.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-text-muted">{game.description}</p>
        <a
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block rounded-lg bg-gradient-to-br from-accent to-accent-soft px-6 py-2.5 text-center font-semibold text-white transition duration-200 hover:-translate-y-px hover:brightness-110"
        >
          Play
        </a>
      </div>
    </div>
  )
}

export default GameCard
