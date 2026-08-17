import Hero from './components/Hero'
import GameCard from './components/GameCard'
import games from './data/games'

function App() {
  return (
    <div>
      <header className="flex items-center gap-3 py-7">
        <img
          src="/favicon.svg"
          alt=""
          className="h-8 w-8 shrink-0 drop-shadow-[0_0_12px_rgba(134,59,255,0.55)]"
        />
        <span className="font-display text-[1.05rem] font-semibold tracking-[0.01em] text-text">
          Zikri Game Portal
        </span>
      </header>

      <Hero />

      <main id="games" className="scroll-mt-6 pt-16">
        <span className="block font-display text-[0.8rem] font-semibold tracking-[0.12em] text-accent-soft uppercase">
          Games
        </span>
        <h2 className="mb-8 font-display text-[1.75rem] font-semibold text-text">
          Featured Builds
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
