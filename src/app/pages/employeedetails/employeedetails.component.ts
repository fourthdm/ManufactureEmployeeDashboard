import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent {

  employeeData: any;

  constructor() { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if(token){
      this.employeeData = jwtDecode(token);
    }
  }
}
