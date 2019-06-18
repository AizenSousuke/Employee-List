import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'employeedetail', component: EmployeeDetailComponent },
  { path: 'employee/:name', component: EmployeeDetailComponent },
  { path: 'department', component: DepartmentListComponent },
  { path: 'department/:id', component: DepartmentDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponent = [
  EmployeeDetailComponent,
  EmployeeListComponent,
  DepartmentDetailComponent,
  DepartmentListComponent,
  PageNotFoundComponent
]
