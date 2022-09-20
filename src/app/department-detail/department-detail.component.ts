import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //get id
    //snap shot approach
    //gets parameter from route url
    //drawback: angular reuses components if its same
    //ngOnInit does not get called again so component doesn't get rerendered with right variables
    // let id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!)
      this.departmentId = id;
    });
  }
  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
}
