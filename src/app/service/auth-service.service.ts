import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  public login(credentials) {
    return new Promise((terima, tolak) => {
      if (credentials.username === '' || credentials.password === '') {
        tolak('Username / Password is required');
      } else if (credentials.username === 'admin' && credentials.password === 'admin') {
        localStorage.setItem('isLogin', 'true');
        terima('Login Succeeded');
        credentials.username = '';
        credentials.password = '';
      } else {
        tolak('Username / Password is invalid');
      }
    });
  }

  public logout() {
    localStorage.setItem('isLogin', 'false');
  }
}
