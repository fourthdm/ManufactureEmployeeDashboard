import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
liked: boolean = false;

  loginform: FormGroup;

  constructor(private _rest: RestService, private _state: StateService, private _router: Router) {
    this.loginform = new FormGroup({
      E_Code: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {

  }

  login() {
    this._rest.Login(this.loginform.value).subscribe((res: any) => {

      const token = res.data;       // <-- Your token is here
      localStorage.setItem('token', token);

      let decoded: any = null;

      try {
        decoded = jwtDecode(token);   // <-- Make sure token is a string
      } catch (error) {
        console.error("JWT Decode Error:", error);
        alert("Invalid token received from server");
        return;
      }

      // Save role
      localStorage.setItem("E_Role", decoded.E_Role);

      // Redirect based on role
      if (decoded.E_Role === 'Designer') {
        this._router.navigate(['/Home/Designer']);
      }
      else if (decoded.E_Role === 'Employee') {
        this._router.navigate(['/Home/Employee']);
      }
      else if (decoded.E_Role === 'QC') {
        this._router.navigate(['/Home/QCdashboard']);
      }
      else if (decoded.E_Role === 'Inventory Manager') {
        this._router.navigate(['/Home/Inventorydashboard']);
      }
      else if (decoded.E_Role === 'Team Lead') {
        this._router.navigate(['/Home/TeamleadDashboard']);
      }
      else {
        this._router.navigate(['/Home']);
      }

    }, err => {
      alert("Invalid employee code");
    });
  }

}
