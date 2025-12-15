import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { AssisgnjobComponent } from './pages/assisgnjob/assisgnjob.component';
import { DesignerComponent } from './pages/designer/designer.component';
import { DesignjobComponent } from './pages/designjob/designjob.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeedetailsComponent } from './pages/employeedetails/employeedetails.component';
import { HomeComponent } from './pages/home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { QcdashboardComponent } from './pages/qcdashboard/qcdashboard.component';
import { TeamleadComponent } from './pages/teamlead/teamlead.component';
import { ViewjobdetailsComponent } from './pages/viewjobdetails/viewjobdetails.component';
import { SafeurlPipe } from './safeurl.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    AssisgnjobComponent,
    DesignerComponent,
    DesignjobComponent,
    EmployeeComponent,
    EmployeedetailsComponent,
    HomeComponent,
    InventoryComponent,
    JobsComponent,
    QcdashboardComponent,
    TeamleadComponent,
    ViewjobdetailsComponent,
    SafeurlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
