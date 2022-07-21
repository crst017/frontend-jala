export type Pokemon = {
  id: number,
  name: string,
  img: string,
  description ?: string,
  sprites ?: string[],
  types ?: string[],
  stats ?: Stats[],
  evolutionChainId ?: string,
  height: string,
  weight: string
}

export type PokemonType = {
  name: string
}

export type Stats = {
  name: string,
  base_stat: number
}

