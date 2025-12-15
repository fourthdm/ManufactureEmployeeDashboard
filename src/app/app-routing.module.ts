import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeedetailsComponent } from './pages/employeedetails/employeedetails.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ViewjobdetailsComponent } from './pages/viewjobdetails/viewjobdetails.component';
import { AssisgnjobComponent } from './pages/assisgnjob/assisgnjob.component';
import { DesignerComponent } from './pages/designer/designer.component';
import { DesignjobComponent } from './pages/designjob/designjob.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { QcdashboardComponent } from './pages/qcdashboard/qcdashboard.component';
import { TeamleadComponent } from './pages/teamlead/teamlead.component';

const routes: Routes = [
    { path: ' ', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'Employee', component: EmployeeComponent },
      { path: 'EmployeeInformation', component: EmployeedetailsComponent },
      { path: 'Job', component: JobsComponent },
      { path: 'JobInformation/:J_id', component: ViewjobdetailsComponent },
      { path: 'AssignJob', component: AssisgnjobComponent },
      { path: 'Designer', component: DesignerComponent },
      { path: 'DesignJob', component: DesignjobComponent },
      { path: 'InventoryDashboard', component: InventoryComponent },
      { path: 'QCDashboard', component: QcdashboardComponent },
      { path: 'TeamleadDashboard', component: TeamleadComponent },
      // { path: 'MaterialData', component: mater },
      // { path: 'MachineData', component: MachineComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
