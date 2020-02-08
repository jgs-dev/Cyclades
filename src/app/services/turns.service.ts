import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurnsService {

  turn: number = 1;
  constructor() { }

  addTurn(){
    this.turn++;
  }

  reset(){
    this.turn = 1;
  }

  getTurn(){
    return this.turn;
  }

}
