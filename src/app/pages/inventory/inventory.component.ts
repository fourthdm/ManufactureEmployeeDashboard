import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
dwgViewerUrl: string = '';
  ModelUrl: string = '';

  AllDesignedJOBs: any[] = [];


  SelectedMaterial: any = undefined;

  constructor(private _rest: RestService, private fb: FormBuilder) {
   
  }

  ngOnInit(): void {
    this.AllDesignedJob();
  }

  AllDesignedJob() {
    this._rest.AllDesigns().subscribe((data: any) => {
      console.log(data);
      this.AllDesignedJOBs = data.data;
      if (this.AllDesignedJOBs.length > 0) {
        const designFileUrl = this.AllDesignedJOBs[0].DsignFile;
        const ModelfileUrl = this.AllDesignedJOBs[0].ModelFile;
        this.dwgViewerUrl = `https://sharecad.org/cadframe/load?url=${encodeURIComponent(designFileUrl)}`;
        this.ModelUrl = `https://sharecad.org/cadframe/load?url=${encodeURIComponent(ModelfileUrl)}`
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

  AddJobs() { }
}
