import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmployeeJobs: any[] = [];

  constructor(private _rest: RestService, private _router: Router) { }

  ngOnInit(): void {
    this.AllEmployeeJobs();
  }

  AllEmployeeJobs() {
    this._rest.JobsForEmployee().subscribe((data: any) => {
      console.log(data);
      this.EmployeeJobs = data.data
    }, (err: any) => {
      console.log(err);
    });
  }

}