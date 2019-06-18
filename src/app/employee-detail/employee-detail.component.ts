import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeList = [];
  public errorMessage;
  public chosenEmployee;

  constructor(
    private _employeeService : EmployeeService,
    private route : Router
    ) { 
    
  }

  ngOnInit() {
    this._employeeService.getEmployee()
      .subscribe(data => this.employeeList = data,
                  error => this.errorMessage = error);

    // 2nd obj in array, find the employee
    console.log(this.route.url.split('/'));
    this.chosenEmployee = this.route.url.split('/')[2];
  }
}
