import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CampingSpotsPage } from '../camping-spots/camping-spots';
import { ToastController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CampingSpotsPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor(private toastCtrl: ToastController) {

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
