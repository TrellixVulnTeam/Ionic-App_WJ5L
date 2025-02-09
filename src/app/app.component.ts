import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { LoginpagePage } from '../pages/loginpage/loginpage';
import { MyshiftsPage } from '../pages/myshifts/myshifts';
import firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../services/auth';
//import { Push,  PushOptions } from '@ionic-native/push';
//import { ProfilePage } from '../pages/profile/profile';
//import { AuthProvider } from '@firebase/auth-types';
//import { AuthProviders } from '../providers/auth/auth';
//import { ProfilePage } from '../pages/profile/profile';









@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginpagePage;
  MyshiftsPage = MyshiftsPage;
  signinPage= LoginpagePage;
  tabsPage = TabsPage;
  isAuthenticated = false;
  
  

  @ViewChild('nav') nav : NavController

  constructor(platform: Platform,
     statusBar: StatusBar, 
     splashScreen: SplashScreen, 
     private menuCtrl: MenuController,
     private authService: AuthService,
     
     //private push: Push,
     //auth: AuthProviders
     
    ) {

    firebase.initializeApp({
      apiKey: "AIzaSyCCkhhDyVrLqndvmn_93nQVUx4RO-atRxg",
      authDomain: "signspin-7f462.firebaseapp.com",
     // databaseURL: "https://signspin-7f462.firebaseio.com",
     // projectId: "signspin-7f462",
     // storageBucket: "signspin-7f462.appspot.com",
      messagingSenderId: "585954348031"
    })

      platform.ready().then(() => {




    /*firebase.initializeApp({
    apiKey: "AIzaSyAEITsjmRjiUxpzj25m4rZ8VtT_bXzMapM",
    authDomain: "myproject-2c6c2.firebaseapp.com",
    databaseURL: "https://myproject-2c6c2.firebaseio.com",
    projectId: "myproject-2c6c2",
    storageBucket: "",
    messagingSenderId: "468750777039"
        
      }); */

         
       /* auth.getPresentUser()
        .then(user => {
          if(user){
            this.rootPage = ProfilePage
          }else {
            this.rootPage = LoginpagePage
          }

          statusBar.styleDefault();
          splashScreen.hide(); 
        })
        

         // Get a FCM token
        fcm.getToken()
        // Listen to incoming messages
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
        })
      )
      .subscribe()     */

    });    
  
   

   
  
   firebase.auth().onAuthStateChanged(user=> {
        if(user){
          this.isAuthenticated = true;
          this.rootPage = TabsPage;
        }else{
          this.isAuthenticated= false;
          this.rootPage = LoginpagePage;
        }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.pushSetup();
    });
  }
  /*pushSetup(){
    const options: PushOptions = {
      android: {
        senderID: '483860303310',
        sound: 'true'

        
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
   };
   
   const pushObject: PushObject = this.push.init(options);
   
   
   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
   
   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
   
   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }    */

  
  // Signing out of the application
 
  onLogout(){
    
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(LoginpagePage);
  }   
 

}





