import { AuthServiceService } from './../service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, Platform, AlertController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  credentials: any = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    public auth: AuthServiceService,
    private toast: ToastController,
    private platform: Platform,
    private alert: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    const status = localStorage.getItem('isLogin');
    if (status === 'true') {
      this.router.navigate(['/pages/tabs/essentials']);
    }
  }

  login() {
    this.auth.login(this.credentials).then((response) => {
      this.toast.create({
        message: 'Login Succeeded',
        duration: 2000,
        position: 'bottom'
      }).then(toast => {
        toast.present();
        this.router.navigate(['/home/tabs/essentials']);
      });
    }).catch((error) => {
      this.toast.create({
        message: 'Something wrong',
        duration: 2000,
        position: 'bottom'
      }).then(toast => {
        toast.present();
      });
    });
  }

}
