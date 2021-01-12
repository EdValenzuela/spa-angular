import { Component, OnInit } from '@angular/core';
import { ViewFlags } from '@angular/core/src/view';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( ({termino}) => {
      console.log(termino);
      this.termino = termino;
      this.heroes = this._heroesService.buscarHeroes( termino );
      console.log(this.heroes);
    })
  }

}
