import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms-test',
  templateUrl: './template-driven-forms-test.component.html',
  styleUrls: ['./template-driven-forms-test.component.css']
})
export class TemplateDrivenFormsTestComponent implements OnInit {

  categoryList:Category[]=[
    new Category('1','Mobiles'),
    new Category('2','Electronics'),
    new Category('3','Furnitures'),
    new Category('4','Kitchen Wares'),
    new Category('5','Electricals'),
    new Category('6','Musicals Instruments')    
  ]

  onSubmitProduct(productDetails: NgForm){
    console.log("Product List forms = > ", productDetails.value)
  }



  constructor() { }

  ngOnInit(): void {
  }

}

class Category{

   id:string;
   CategoryName:string;

   constructor(id:string, CategoryName:string){
    this.id=id;
    this.CategoryName=CategoryName
   }

}
