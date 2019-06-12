import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee() {
    return [
      { "name" : "Nik", "age" : "27" },
      { "name" : "Misaka", "age" : "27" },
      { "name" : "Mikoto", "age" : "27" },
      { "name" : "Ami", "age" : "27" }
    ]
  }
}
