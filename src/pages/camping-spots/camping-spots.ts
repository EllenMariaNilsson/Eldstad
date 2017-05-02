import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampingSpotsDetailsPage } from '../camping-spots-details/camping-spots-details';

@Component({
  selector: 'page-camping-spots',
  templateUrl: 'camping-spots.html',
})
export class CampingSpotsPage {

  constructor(public navCtrl: NavController) {
  }

  goToSomethingElse() {
    this.navCtrl.push(CampingSpotsDetailsPage);
}

}
