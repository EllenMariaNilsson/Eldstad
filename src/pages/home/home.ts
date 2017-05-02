import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampingSpotsDetailsPage } from '../camping-spots-details/camping-spots-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSomethingElse() {
    this.navCtrl.push(CampingSpotsDetailsPage);
}

}
