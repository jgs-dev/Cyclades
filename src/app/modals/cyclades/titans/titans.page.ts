import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClassicService } from 'src/app/services/cyclades/classic.service';
import { TurnsService } from 'src/app/services/turns.service';
import { TitansService } from 'src/app/services/cyclades/titans.service';

@Component({
  selector: 'app-titans',
  templateUrl: './titans.page.html',
  styleUrls: ['./titans.page.scss'],
})
export class TitansPage implements OnInit {

  @Input() mode: string
  @Input() players: number;

  constructor(private modalCtrl: ModalController, private logic: TitansService, private turns: TurnsService) { }

  ngOnInit() {
  }

  shuffle() {
    this.logic.shuffleController(this.players);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  ionViewDidLeave() {
    this.turns.reset();
  }
}
