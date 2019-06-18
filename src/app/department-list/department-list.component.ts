import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    { "id" : 1, "name" : "bootstrap" },
    { "id" : 2, "name" : "angular" },
    { "id" : 3, "name" : "MongoDB" },
    { "id" : 4, "name" : "node" },
    { "id" : 5, "name" : "Ruby" }
  ]

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onSelect(department) {
    this.router.navigate(['/department', department.id]);
  }

}
