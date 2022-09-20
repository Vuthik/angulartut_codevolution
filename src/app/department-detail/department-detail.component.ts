import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  // templateUrl: './department-detail.component.html',
  template: `<h3>You selected department with id = {{ departmentId }}</h3>`,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //get id
    let id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.departmentId = id;
  }
}
