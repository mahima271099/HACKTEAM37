import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  callNum: string = '+7838705526';

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

  callClicked() {
    this.callNumber.callNumber(this.callNum, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
