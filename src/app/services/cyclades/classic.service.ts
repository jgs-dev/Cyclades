import { Injectable } from '@angular/core';
import { TurnsService } from '../turns.service';

@Injectable({
  providedIn: 'root'
})
export class ClassicService {

  gods: string[];
  

  constructor(private turns: TurnsService) {
    this.gods = ["../../../assets/img/poseidon.png", "../../../assets/img/ares.png", "../../../assets/img/zeus.png", "../../../assets/img/athena.png"];
    this.gods = this.shuffle(this.gods);
  }


  shuffleController(players: number):string[] {

    // When playing with 4 players, the last of the 4 Gods will be placed face-down. It will not be available for this cycle.
    //  During the following cycle, you will place this God in the first space, face-up, and shuffle the other 3.
    //   Once again, the God placed in 4th place will be face-down and will become first God during the following cycle.

    // When playing with 3 players, the first two Gods will be placed face-up and the last two face-down. 
    // During the next cycle, the two Gods which were face-down will be used. 
    // On the cycle following that, the 4 Gods will be shuffled again to make two new random pairs.
    switch (players) {
      case 5:
        this.gods = this.shuffle(this.gods);
        this.turns.addTurn();
        return this.gods;
      case 4:

        let auxGods = this.gods.slice(0, 3);
        auxGods = this.shuffle(auxGods);
        this.gods[0] = this.gods[3];
        this.gods[1] = auxGods[0];
        this.gods[2] = auxGods[1];
        this.gods[3] = auxGods[2];
        this.turns.addTurn();
        auxGods = [...this.gods];
        auxGods[3] = "../../../assets/img/back.png";
        return auxGods;
      case 3:
        if (this.turns.getTurn() % 2) {

          let auxGods = [...this.gods];
          this.gods[0] = auxGods[3];
          this.gods[1] = auxGods[2];
          this.gods[2] = auxGods[1];
          this.gods[3] = auxGods[0];
          this.turns.addTurn();
          auxGods = [...this.gods];
          auxGods[2] = "../../../assets/img/back.png";
          auxGods[3] = "../../../assets/img/back.png";
          return auxGods;

        } else {
          this.gods = this.shuffle(this.gods);
          let auxGods = [...this.gods];
          auxGods[2] = "../../../assets/img/back.png";
          auxGods[3] = "../../../assets/img/back.png";
          this.turns.addTurn();
          return auxGods;
        }
        
        break;
    }
  }


  shuffle(array: string[]) {

    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  getGods() {
    return this.gods;
  }
}
