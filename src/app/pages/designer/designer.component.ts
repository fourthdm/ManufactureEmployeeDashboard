import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent {

  AddFormDesignJobs: FormGroup;
  EditDesignJobs: FormGroup;

  Designerjobs: any;

  AllDesiignJobs: any[] = [];

  DEJobs: any[] = [];

  SelectedJobs: any = undefined;
  selectedFile: File | null = null;

  SelectedAsssignJobs: any = undefined;

  dwgViewerUrl: string = '';
  ModelUrl: string = '';

  token: string | null = localStorage.getItem("token");
  userData: any = this.token ? jwtDecode(this.token) : null;

  constructor(private _rest: RestService, private _router: Router, private fb: FormBuilder) {
    this.AddFormDesignJobs = this.fb.group({
      JobName: [''],
      DsignFile: [''],
      ModelFile: [''],
      DesignBy: this.userData?.E_Name || ''
    });

    this.EditDesignJobs = this.fb.group({
      Job_Id: [''],
      JobName: [''],
      DsignFile: [''],
      ModelFile: [''],
      DesignBy: this.userData?.E_Name || ''
    });

  }

  ngOnInit(): void {
    this.AllDesignerjob();
    this.DesignedJob();
  }

  DesignedJob() {
    this._rest.DesignerJobs().subscribe((data: any) => {
      this.DEJobs = data.data;
      if (this.DEJobs.length > 0) {
        const designFileUrl = this.DEJobs[0].DsignFile;
        const ModelfileUrl = this.DEJobs[0].ModelFile;
        this.dwgViewerUrl = `https://sharecad.org/cadframe/load?url=${encodeURIComponent(designFileUrl)}`;
        this.ModelUrl = `https://sharecad.org/cadframe/load?url=${encodeURIComponent(ModelfileUrl)}`
      }
      console.log(data);
    }, (err: any) => {
      console.log(err);
    });
  }


  AllDesignerjob() {
    this._rest.JobForDesigner().subscribe((data: any) => {
      this.Designerjobs = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // 🚀 Submit form
  onSubmit() {
    if (this.AddFormDesignJobs.invalid) {
      alert('Please fill in all required fields!');
      return;
    }
    const formData = new FormData();
    // Append all form values
    Object.keys(this.AddFormDesignJobs.controls).forEach(key => {
      formData.append(key, this.AddFormDesignJobs.get(key)?.value);
    });

    // Append file if selected
    if (this.selectedFile) {
      formData.append('DsignFile', this.selectedFile);
      formData.append('ModelFile', this.selectedFile);
    }

    // ✅ Send POST request to Node API
    this._rest.DesignJobsAddedbyDesigner(formData).subscribe({
      next: (response: any) => {
        if (response.success) {
          // alert('✅ Job added successfully and machine assigned!');
          this.AddFormDesignJobs.reset();
          this.ngOnInit();
        } else {
          alert('⚠️ ' + response.message);
        }
      },
      error: (err) => {
        console.error(err);
        alert('❌ Error while adding job: ' + (err.error?.message || err.message));
      }
    });
  }

  editAssignjobs(Job_Id: number) {
    const Assignjobs = this.DEJobs.find(A => A.Job_Id === Job_Id);
    if (Assignjobs) {
      this.SelectedAsssignJobs = 1;
      this.EditDesignJobs.patchValue(Assignjobs);
    }
  }

  onFileChange(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.EditDesignJobs.patchValue({ [fieldName]: file });
    }
  }

  AssignJobUpdates(): void {
    const formData = new FormData();
    Object.keys(this.EditDesignJobs.controls).forEach(key => {
      formData.append(key, this.EditDesignJobs.get(key)?.value);
    });
    // Update form data 
    this._rest.UpdatedDesignjobbyDesigner(this.EditDesignJobs.value.Job_Id, formData).subscribe(
      response => {
        console.log('Update success', response);
        this.EditDesignJobs.reset();
        this.ngOnInit();
      },
      error => {
        console.error('Update error', error);
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

}
