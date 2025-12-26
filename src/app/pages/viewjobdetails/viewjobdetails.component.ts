import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-viewjobdetails',
  templateUrl: './viewjobdetails.component.html',
  styleUrls: ['./viewjobdetails.component.css']
})
export class ViewjobdetailsComponent implements OnInit {

  AllJob: any[] = [];
  JobViewerUrl: string = '';

  constructor(private _rest: RestService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      const Job_id = params['Job_id'];
      this._rest.ALLJobsById(Job_id).subscribe((data: any) => {
        this.AllJob = data.data;
        if (this.AllJob.length > 0) {
          const designFileUrl = this.AllJob[0].DesignFile;
          this.JobViewerUrl = `https://sharecad.org/cadframe/load?url=${encodeURIComponent(designFileUrl)}`;
        }
      }, (err: any) => {
        console.log(err);
      });
    });
  }
}