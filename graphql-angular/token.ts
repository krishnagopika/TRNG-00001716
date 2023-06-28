import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token: string = 'hello world';

  constructor() { }

  getToken() {
    this.token = localStorage.getItem('Authorization')?.replace("Bearer ", "") || '';
    return this.token;
  }

  generateToken(email: string, role: string) {
    const sign = require('jwt-encode');
    const secret = 'secret';
    const data = {
      id: role,
      email: email
    };
    const jwt = sign(data, secret);
    this.token =jwt;
    localStorage.setItem('Authorization', jwt);
  }

  
}
