import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  Alljobs: any[] = [];

  dwgViewerUrl: string = '';
  ModelUrl: string = '';

  constructor(private _rest: RestService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobsData();
  }

  jobsData() {
    this._rest.JobsForEmployee().subscribe((data: any) => {
      console.log(data);
      this.Alljobs = data.data;
      if (this.Alljobs.length > 0) {
        const designFileUrl = this.Alljobs[0].DesignFile;
        this.dwgViewerUrl = `https://sharecad.org/cadframe/load?url=${encodeURIComponent(designFileUrl)}`;
      }
    }, (err: any) => {
      console.log(err);
    });
  }


  downloadFromUrl(fileUrl: string) {
    const fileName = fileUrl.split('/').pop();   // extract file name

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName ?? 'file';   // force download
    a.target = "_blank";
    a.click();
  }

  startJob(Job_id: number) {
    this._rest.StartJob(Job_id).subscribe(() => {
      alert('Job Started');
      this.jobsData();
    });
  }

  completeJob(Job_id: number) {
    this._rest.CompleteJob(Job_id).subscribe(() => {
      alert('Job Completed');
      this.jobsData();
    });
  }

  //  onStart(Job_id: any) {
  //   this.startTime = Date.now();
  //   this.currentStatus = 'start';

  //   this.EnggTime.patchValue({
  //     job_id: Job_id,
  //     enggstatus: 'start',
  //     working_days: this.workingDays,
  //     working_time: 0
  //   });
  //   this._rest.AddJobbyEmployee(this.EnggTime.value).subscribe(response => {
  //     console.log(response);
  //   });
  // }

  // onPause(Job_id: any) {
  //   const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
  //   this.totalWorkingSeconds += elapsed;
  //   this.currentStatus = 'pause';

  //   this.EnggTime.patchValue({
  //     job_id: Job_id,
  //     enggstatus: 'pause',
  //     working_days: this.workingDays,
  //     working_time: elapsed
  //   });

  //   this._rest.AddJobbyEmployee(this.EnggTime.value).subscribe(response => {
  //     console.log(response);
  //   });
  // }

  // onRestart(Job_id: any) {
  //   this.startTime = Date.now();
  //   this.currentStatus = 'restart';

  //   this.EnggTime.patchValue({
  //     job_id: Job_id,
  //     enggstatus: 'restart',
  //     working_days: this.workingDays,
  //     working_time: 0
  //   });

  //   this._rest.AddJobbyEmployee(this.EnggTime.value).subscribe(response => {
  //     console.log(response);
  //   });
  // }

  // onSubmit(Job_id: any) {
  //   const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
  //   this.totalWorkingSeconds += elapsed;
  //   this.currentStatus = 'submit';

  //   this.EnggTime.patchValue({
  //     job_id: Job_id,
  //     enggstatus: 'submit',
  //     working_days: this.workingDays,
  //     working_time: this.totalWorkingSeconds
  //   });

  //   this._rest.AddJobbyEmployee(this.EnggTime.value).subscribe((res: any) => {
  //     console.log(res);
  //     if (res.success && res.data?.engg_total_time != null) {
  //       alert('Total Working Time: ' + res.data.engg_total_time + ' seconds');
  //     }
  //   });
  // }

}