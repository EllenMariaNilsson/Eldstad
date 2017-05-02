import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-camping-spots-details',
  templateUrl: 'camping-spots-details.html',
})
export class CampingSpotsDetailsPage {

  constructor(public navCtrl: NavController) {
  }

  goBack() {
    this.navCtrl.pop();
}

}
