import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClassicService } from 'src/app/services/cyclades/classic.service';
import { TurnsService } from 'src/app/services/turns.service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.page.html',
  styleUrls: ['./classic.page.scss'],
})
export class ClassicPage implements OnInit {

  @Input() mode: string
  @Input() players: number;

  gods: string[];

  constructor(private modalCtrl: ModalController, private logic: ClassicService,private turns: TurnsService) { 
    
  }

  ngOnInit() {
  }

  shuffle(){
    this.gods = this.logic.shuffleController(this.players);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  ionViewDidLeave(){
    this.turns.reset();
  }

}
