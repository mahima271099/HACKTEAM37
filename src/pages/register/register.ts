import {Component} from "@angular/core";
import {NavController, ToastController} from "ionic-angular";
import {LoginPage} from "../login/login";
import { HomePage } from "../home/home";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public nav: NavController, public toastCtrl: ToastController) {
  }

  // register and go to home page
  register() {
    let toast = this.toastCtrl.create({
      message: 'Account registered successfully',
      duration: 3000,
      position: 'top',
      cssClass: 'dark-trans',
      closeButtonText: 'OK',
      showCloseButton: true
    });
    toast.present();

    this.nav.setRoot(LoginPage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
