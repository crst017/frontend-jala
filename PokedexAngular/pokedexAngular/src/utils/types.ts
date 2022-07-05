export type Pokemon = {
  id: number,
  name: string,
  img: string,
  description ?: string,
  types ?: Type[]
}

export type Type = {
  name: string
}


