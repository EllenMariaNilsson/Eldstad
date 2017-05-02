import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CampingSpotsPage } from '../camping-spots/camping-spots';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CampingSpotsPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
