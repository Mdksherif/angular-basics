import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.css']
})
export class PaginationsComponent implements OnInit {

  constructor(private http: HttpClient){}

  ngOnInit(): void {
  }



}
