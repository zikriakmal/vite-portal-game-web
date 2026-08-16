import './App.css'
import GameCard from './components/GameCard'
import games from './data/games'

function App() {
  return (
    <div>
      <header className="portal-header">
        <h1>Zikri Game Portal</h1>
        <p>Pick a game and start playing</p>
      </header>
      <main className="game-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </main>
    </div>
  )
}

export default App
