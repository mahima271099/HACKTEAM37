import { Component, SimpleChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, FabContainer } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  fab: FabContainer;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ngOnChanges(changes: SimpleChanges) {
    // var accList: AccountList[] = changes.inputData.currentValue;
    if (this.fab) {
      this.fab.close();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionFabClicked(fab: FabContainer) {
    if (this.fab === fab) {
      return;
    } else if (this.fab) {
      this.fab.close();
    }
    this.fab = fab;
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  deletePost() {

  }

  goToAccountDetails() {
    
  }

}
