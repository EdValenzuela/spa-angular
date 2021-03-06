import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styles: []
})
export class CardHeroeComponent implements OnInit {

  @Input() heroe: any ={};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate( ['/heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
