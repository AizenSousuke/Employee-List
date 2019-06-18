import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  public selectedId: number;

  constructor(private router : Router,
              private route : ActivatedRoute 
  ) { }

  ngOnInit() {
    // Subscription to paramMap approach
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(department) {
    this.router.navigate(['/department', department.id]);
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
