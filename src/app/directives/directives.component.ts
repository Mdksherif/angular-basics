import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    //structural directives *ngIf
    isVisible=true

    // structural directive *ngFor using array
    items:string[]=['item 1','item 2','item 3','item 4', 'item 5']
    
    // structural directive *ngFor using Objects    
    films =[
      { title:'Harry Porter', budget:'200cr', days:'100 days', crews:["porter", "Emma watson", "Daniel RadCliffe"], earns:"300 cr", directors:["j.k rowling", "Alfonso Cuaron", "Chris colombus"]},
      { title:'S pider Man', budget:'200cr', days:'200 days', crews:["parker", "peter", "grandma"], earns:"300 cr", directors:["sam raimi"]},
      { title:'Pirates of the caraibean', budget:'300cr', days:'100 days', crews:["johny deep", "keira knightely", "orlando bloom"], earns:"300 cr", directors:["Espen sandberg", "joachim Roanning"]},
      { title:'Iron Man', budget:'100cr', days:'400 days', crews:["robert Downey", "tony stark"], earns:"300 cr", directors:["jonathan kolla", "Jon Favreau"]},
      { title:'Avengers', budget:'100cr', days:'500 days', crews:["Stan lee", "Jeremy Renner", "robert Downey"], earns:"300 cr", directors:["joe, russo"]}
    ]

    // *ngSwitch
    selectedMovieGenre:string="Action"

    num=1

    //ngIf
    selected = true
    content =true
    checkbox1 = false
    checkbox2 = true
    demoPara:string ="demo"
    thenvalue:string ="hello"

    //attribute directive 
    enableRed = true
    //[ngClass]
    contentColor = false
    contentfontstyle = false
    contentfontweight = false
    //[ngStyle]
    styleModelcolor="";


}
