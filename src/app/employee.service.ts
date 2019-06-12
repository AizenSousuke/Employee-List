import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public _url : string = "test/assets/employeeList.json";

  constructor(private _http :HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this._url);
  }
}
