import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// using of input decorater to transfer the data from parent to child (form to list)
 @Input('inputcars') cars:string[] = [];
 @Input('inputList') nameList:string[]=[];

}
