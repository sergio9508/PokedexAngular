import { Injectable } from "@angular/core";
import { NamedAPIResourceList, PokemonClient, PokemonForm } from "pokenode-ts";
import { Pokemon } from "pokenode-ts";
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private client: PokemonClient;

  constructor() {
    this.client = new PokemonClient();
  }

  public async getPokemonFormById(id: number): Promise<PokemonForm> {
    return await this.client.getPokemonFormById(id);
  }

  public async getPokemonFormByName(name: string): Promise<PokemonForm> {
    return await this.client.getPokemonFormByName(name);
  }

  public async getPokemons(offset:number, limit:number): Promise<NamedAPIResourceList> {
    return await this.client.listPokemons(offset, limit);
  }

  public async getPokemonById(id: number): Promise<Pokemon> {
    return await this.client.getPokemonById(id);
  }

  public async getPokemonByName(name: string): Promise<Pokemon>{
    return await this.client.getPokemonByName(name);
  }

}
