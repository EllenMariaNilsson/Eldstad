import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CampingSpotsDetailsPage } from '../camping-spots-details/camping-spots-details';

@Component({
  selector: 'page-camping-spots',
  templateUrl: 'camping-spots.html',
})
export class CampingSpotsPage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
  }

  goToSomethingElse() {
    this.navCtrl.push(CampingSpotsDetailsPage);
}

presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Klicka på en bild för att se Eldstäder!',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
