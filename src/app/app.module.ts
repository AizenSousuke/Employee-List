import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { AppRoutingModule, AppRoutingComponent } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    DepartmentDetailComponent,
    DepartmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
