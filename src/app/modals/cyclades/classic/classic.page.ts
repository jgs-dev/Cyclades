import { Component, OnInit, Input, Directive, ElementRef, ContentChildren, QueryList } from '@angular/core';
import { ModalController, AnimationController } from '@ionic/angular';
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

  constructor(private modalCtrl: ModalController, private logic: ClassicService, public turns: TurnsService, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  shuffle() {
    this.gods = this.logic.shuffleController(this.players);
    const animation = this.animationCtrl.create()
      .addElement(document.querySelectorAll("ion-img"))
      .duration(1200)
      .fromTo("transform", "translateX(-100px)", "translateX(0px)")
      .fromTo("opacity", "0", "")
    console.log(document.querySelectorAll("ion-img"))
    animation.play()
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  ionViewDidLeave() {
    this.turns.reset();
  }

}
