import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NotificationsPage } from '../pages/notifications/notifications';
import { CallNumber } from '@ionic-native/call-number';
import { AboutusPageModule } from '../pages/aboutus/aboutus.module';
import { HomePageModule } from '../pages/home/home.module';
import { HowItWorksPageModule } from '../pages/how-it-works/how-it-works.module';
import { SupportPageModule } from '../pages/support/support.module';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    NotificationsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AboutusPageModule,
    HomePageModule,
    HowItWorksPageModule,
    SupportPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    NotificationsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber
  ]
})
export class AppModule {}
