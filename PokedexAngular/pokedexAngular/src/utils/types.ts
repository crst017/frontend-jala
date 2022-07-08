export type Pokemon = {
  id: number,
  name: string,
  img: string,
  description ?: string,
  sprites ?: string[],
  types ?: PokemonType[],
  stats ?: Stats[],
}

export type PokemonType = {
  name: string
}

export type Stats = {
  name: string,
  base_stat: number
}

