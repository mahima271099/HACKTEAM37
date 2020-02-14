import { HowItWorksPage } from './../pages/how-it-works/how-it-works';
import { SupportPage } from './../pages/support/support';
import { AboutusPage } from './../pages/aboutus/aboutus';
import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.appMenuItems = [
      { title: 'Dashboard', component: HomePage, icon: 'home' },
      { title: 'Add Post', component: HomePage, icon: 'add-circle' },
      { title: 'How it works?', component: HowItWorksPage, icon: 'cog' },
      { title: 'About Us', component: AboutusPage, icon: 'information-circle' },
      { title: 'Support', component: SupportPage, icon: 'call' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
