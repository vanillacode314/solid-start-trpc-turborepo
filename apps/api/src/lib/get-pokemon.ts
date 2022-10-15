import { IPokemon } from "@api/types";

export async function getPokemon(name: string): Promise<IPokemon> {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await fetch(url);
  if (!res.ok) return { name: "Not Found" };
  const data = await res.json();
  return data;
}
