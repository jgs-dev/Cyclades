import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalController, AnimationController, IonImg, IonFab } from '@ionic/angular';
import { ClassicPage } from '../modals/cyclades/classic/classic.page';
import { TitansPage } from '../modals/cyclades/titans/titans.page';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild("image", { read: Element, static: false }) test: Element;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder, private animateCtrl: AnimationController) {
    console.log(this.test)
    
  }

  homeForm = this.formBuilder.group({
    players: [""],
    mode: [""]
  });

  ngOnInit() {
    console.log(this.test, "onInit")
  }

  testingMethod() {
    
    this.animateCtrl.create()
      .addElement(this.test)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2')

  }

  async openCycladesModal() {

    if (this.homeForm.get("mode").value == "classic") {
      const modal = await this.modalCtrl.create({
        component: ClassicPage,
        componentProps: {
          mode: "Classic",
          players: Number(this.homeForm.get("players").value)
        }
      });

      await modal.present();

    } else if (this.homeForm.get("mode").value == "titans") {
      const modal = await this.modalCtrl.create({
        component: TitansPage,
        componentProps: {
          mode: "Titans",
          players: Number(this.homeForm.get("players").value)
        }
      });

      await modal.present();

    }

  }
}
