import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  public id: string | null | undefined;
  public pokemon: any;


  constructor(private route: ActivatedRoute, private pokeservice: PokedexService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPokemon(this.id ? this.id : "");
  }


  async getPokemon(id: string) {
    await this.pokeservice.getPokemonById(parseInt(id)).then((pokemon) => {
      this.pokemon = pokemon;
    })
  }

}
