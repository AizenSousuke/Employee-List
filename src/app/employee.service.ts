import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http :HttpClient) { }

  getEmployee() {
    return this._http.get('/src/app/employeeList.json');
  }
}
