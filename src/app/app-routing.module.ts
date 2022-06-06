import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'detail/:id', component: DetailPokemonComponent }
];

@NgModule({
  declarations: [IndexComponent],
  imports: [BrowserModule, CommonModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
