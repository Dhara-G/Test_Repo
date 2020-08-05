import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
test:string="dhara tested git porporly working or not";

test2:string="another string adding to check fot updates";
  constructor() { }

  ngOnInit(): void {
  }

}
