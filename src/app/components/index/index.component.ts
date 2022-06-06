import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon, PokemonForm } from 'pokenode-ts';
import { PokedexService } from 'src/app/services/pokedex.service';
import { List } from 'linqts';
import { Router } from '@angular/router';


@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnChanges {
  @Input() public pokemons: Pokemon[] = [];
  public OldPokemons: Pokemon[] = [];
  name : string = "";
  constructor(private pokeservice: PokedexService, private router : Router) { }

  ngOnInit(): void {
    this.getfirstPokemon();
  }

  async getfirstPokemon(){
    for (let index = 1; index < 151; index++) {
      await this.sortPokemons(index);
    }
  }

  async getPokemonById(id: number) {
    await this.pokeservice.getPokemonById(id).then((pokemon) => {
      this.pokemons.push(pokemon);
      this.OldPokemons.push(pokemon);
    })
  }

  async sortPokemons(id: number){
    await this.getPokemonById(id);
    this.pokemons.sort((a, b) => { return a.id - b.id; });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  async changeName(){
    if(this.name !== ""){
      let pokemons = new List<Pokemon>();
      this.pokemons = [];
      this.pokemons = this.OldPokemons;
      this.pokemons.forEach(pokemon=>{
        pokemons.Add(pokemon);
      })
      let newPokemons = pokemons.Where(x => x?.name.toLowerCase().includes(this.name.toLowerCase()) ? true : false);
      this.pokemons = newPokemons.ToArray();
    }else{
      this.pokemons = this.OldPokemons;
    }
  }

  goToDetail(id: number){
    this.router.navigate([`/detail/${id}`]);
  }

}
