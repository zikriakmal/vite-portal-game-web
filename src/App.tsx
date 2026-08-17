import './App.css'
import Hero from './components/Hero'
import GameCard from './components/GameCard'
import games from './data/games'

function App() {
  return (
    <div>
      <header className="site-header">
        <img src="/favicon.svg" alt="" className="site-header__logo" />
        <span className="site-header__name">Zikri Game Portal</span>
      </header>

      <Hero />

      <main id="games" className="games-section">
        <span className="section-eyebrow">Games</span>
        <h2 className="section-title">Featured Builds</h2>
        <div className="game-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
