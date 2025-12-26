import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  Url = 'http://localhost:3000';

  constructor(private _http: HttpClient, private _state: StateService) { }

  Login(data: any) {
    return this._http.post(this.Url + '/EmployeeLogin', data);
  }

  AllDesigner() {
    return this._http.get(this.Url + '/OnlyAllDesigner');
  }

  AssignJobADD(formData: FormData) {
    return this._http.post(this.Url + '/AddAassignJob', formData);
  }

  AssignjobsUpdate(AJob_id: number, formdata: FormData) {
    return this._http.put(this.Url + '/AssignJobUpdate/' + AJob_id, formdata);
  }

  AllAssignsJobs() {
    return this._http.get(this.Url + '/AllAssignJob');
  }

  DeleteAssignJobs(AJob_id: number) {
    return this._http.delete(this.Url + '/DeleteAssignjob/' + AJob_id);
  }

  Assignjobsbyid(AJob_id: number) {
    return this._http.get(this.Url + '/AssignJobbyId/' + AJob_id);
  }

  AssignjobtoDesigner(data: any) {
    return this._http.post(this.Url + '/AssinjobbyDesigner', data);
  }

  JobForDesigner() {
    this._state.checkToken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.get(this.Url + '/designerjobstodesigner', { headers });
  }

  JobsForEmployee() {
    this._state.checkToken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.get(this.Url + '/AlljobtableDatatoEmployee', { headers });
  }

  ALLJobsById(Job_id: number) {
    return this._http.get(this.Url + '/jobtableAllDatabyJob_id/' + Job_id);
  }

  //Assignjob ends

  AddDesignjob(formdata: FormData) {
    return this._http.post(this.Url + '/DesignerJobsAdded', formdata);
  }

  DesignJobsAddedbyDesigner(formdata: FormData) {
    this._state.checkToken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.Url + '/DesignAdded', formdata, { headers });
  }

  DesignerJobs() {
    this._state.checkToken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.get(this.Url + '/DEsignedJobss', { headers });
  }

  UpdatedDesignjobbyDesigner(Job_Id: number, formdata: FormData) {
    this._state.checkToken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.Url + '/UpdatedDesignjobbyDesigner/' + Job_Id, formdata, { headers });
  }

  AllDesigns() {
    return this._http.get(this.Url + '/AllDesign');
  }

  AllDesignsbyid(Job_Id: number) {
    return this._http.get(this.Url + '/DesignjobbyId/' + Job_Id);
  }

  UpdateDesignJob(Job_Id: number, formdata: FormData) {
    return this._http.put(this.Url + '/UpdateDesignjob/' + Job_Id, formdata);
  }

  DeleteDesign(Job_Id: number) {
    return this._http.delete(this.Url + '/DeleteJobs/' + Job_Id);
  }

  // Material Data
  AllMaterials() {
    return this._http.get(this.Url + '/ALLMaterial');
  }

  AddMAterialS(data: any) {
    return this._http.post(this.Url + '/AddMaterial', data);
  }

  UpdateMaterial(data: any) {
    return this._http.put(this.Url + '/UpdateMaterial/' + data.Material_id, data);
  }

  AllMaterialTypes() {
    return this._http.get(this.Url + '/Materialbygroup');
  }

  MaterialByid(Material_id: any) {
    return this._http.get(this.Url + '/MaterialbyId/' + Material_id);
  }

  MaterialByWeights(data: any) {
    return this._http.post(this.Url + '/MaterialByWeight', data);
  }

  MaterialByName(data: any) {
    return this._http.post(this.Url + '/MaterialbyMaterialName', data);
  }

  MaterialBySize(data: any) {
    return this._http.post(this.Url + '/MaterialByMaterialsize', data);
  }

  MaterialByType(data: any) {
    return this._http.post(this.Url + '/MaterialByMaterialtype', data);
  }
  DeleteMaterial(Material_id: number) {
    return this._http.delete(this.Url + '/DeleteMaterial/' + Material_id);
  }

  // Material API Ends

  //AddJob by employeee
  AddJobbyEmployee(data: any) {
    return this._http.post(this.Url + '/NewAddJobupdatematerial', data);
  }

  StartJob(Job_id: number) {
    return this._http.post(this.Url + '/startJob',
      { Job_id }, // 👈 MUST be object
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  // StartJob(Job_id: number) {
  //   return this._http.post(this.Url + '/startJob' , Job_id);
  // }

  CompleteJob(Job_id: number) {
    return this._http.post(this.Url + '/completeJob', Job_id);
  }


}
