import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurnsService {

  turn: number = 0;
  constructor() { }

  addTurn(){
    this.turn++;
  }

  reset(){
    this.turn = 0;
  }

  getTurn(){
    return this.turn;
  }

}
