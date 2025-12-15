import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  token = '';
  report: any = undefined;

  constructor(private _router: Router) { }

  // decodedToken() {
  //   const token = localStorage.getItem('token');

  //   if (!token) {
  //     return null;
  //   }

  //   try {
  //     return jwtDecode(token);
  //   } catch {
  //     return null;
  //   }
  // }

  decodedToken() {
    this.report = jwtDecode(this.token);
    return this.report;
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.decodedToken();
    } else {
      this._router.navigate(['/login']);
    }
  }

}
