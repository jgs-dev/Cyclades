import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClassicPage } from '../modals/cyclades/classic/classic.page';
import { TitansPage } from '../modals/cyclades/titans/titans.page';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) { }

  homeForm = this.formBuilder.group({
    players: [""],
    mode: [""]
  });

  ngOnInit() {
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
