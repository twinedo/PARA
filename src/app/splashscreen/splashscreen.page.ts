import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {


  slides = [
    {
      img: 'assets/splash/cake.svg',
      title: 'Ini Kue Enak Looohh'
    },
    {
      img: 'assets/splash/girl.svg',
      title: 'Kiw Kiw'
    },
    {
      img: 'assets/splash/money.svg',
      title: 'I am a billionair'
    },

  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  skip() {
    this.router.navigateByUrl('/login');
  }

}
