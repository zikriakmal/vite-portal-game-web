export interface Game {
  id: number
  title: string
  description: string
  thumbnail: string
  url: string
  engine?: string
}

const games: Game[] = [
  {
    id: 1,
    title: "Dodge the Creeps",
    description: "Avoid the creeps as long as you can! A classic arcade survival game made with Godot.",
    thumbnail: "/thumbnails/dodge-the-creepas.png",
    url: "/games/dodge-the-creeps/godot-game-web.html",
    engine: "Godot",
  },
]

export default games
