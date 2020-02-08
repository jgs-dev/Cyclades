import { Injectable } from '@angular/core';
import { TurnsService } from '../turns.service';

@Injectable({
  providedIn: 'root'
})
export class TitansService {

  gods: string[];

  constructor(private turns: TurnsService) {
    this.gods = ["Poseidon", " Ares", "Zeus", "Athena", "Kronos"];
    this.gods = this.shuffle(this.gods);
  }

  shuffleController(players: number) {

    // 6 Players:
    // Shuffle the 5 large God tiles and place them randomly on the 5 empty spaces above Apollo.

    // 5 Players:
    // The last of the 5 Gods will be placed face-down. It will not be available for this cycle. 
    // During the following cycle, place this God in the first space, face-up, and shuffle the other 4. 
    // Once again, the God placed in 5th place will be face-down and will become the first God during the following cycle.

    // 4 Players:
    // The last 2 Gods will be placed face-down and will become the first two Gods during the next cycle.
    // 3 Players:
    // The last 3 Gods are placed face-down. Two of them will be randomly placed in the first two spaces during the next cycle.

    switch (players) {

      case 6:
        this.gods = this.shuffle(this.gods);
        this.turns.addTurn();
        break;
      case 5:
        {
          let auxGods = this.gods.slice(0, 4);
          auxGods = this.shuffle(auxGods);
          this.gods[0] = this.gods[4];
          this.gods[1] = auxGods[0];
          this.gods[2] = auxGods[1];
          this.gods[3] = auxGods[2];
          this.gods[4] = auxGods[3];
          this.turns.addTurn();
          break;
        }
      case 4:
        {
          let auxGods = this.gods.slice(0, 3);
          auxGods = this.shuffle(auxGods);
          this.gods[0] = this.gods[4];
          this.gods[1] = this.gods[3];
          this.gods[2] = auxGods[0];
          this.gods[3] = auxGods[1];
          this.gods[4] = auxGods[2];

          this.turns.addTurn();
          break;
        }
      case 3:
        // 3 Players:
        // The last 3 Gods are placed face-down. Two of them will be randomly placed in the first two spaces during the next cycle.
        
        let auxGodsFirstHalf = this.gods.slice(0, 2);
        let auxGodsSecondHalf = this.gods.slice(2);

        auxGodsSecondHalf = this.shuffle(auxGodsSecondHalf);

        this.gods[0] = auxGodsSecondHalf[0];
        this.gods[1] = auxGodsSecondHalf[1];

        auxGodsFirstHalf.push(auxGodsSecondHalf[2]);

        this.gods[2] = auxGodsFirstHalf[0];
        this.gods[3] = auxGodsFirstHalf[1];
        this.gods[4] = auxGodsFirstHalf[2];


        this.turns.addTurn();
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
