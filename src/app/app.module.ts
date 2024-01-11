import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './formlist/list.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent } from './hooks-child/hooks-child.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { TemplateDrivenFormsTestComponent } from './template-driven-forms-test/template-driven-forms-test.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsTestComponent } from './reactive-forms-test/reactive-forms-test.component';
import { HttpSectionComponent } from './http-section/http-section.component';
import{ HttpClientModule } from '@angular/common/http';
import { HttpTestComponent } from './http-test/http-test.component'
// import router module 
import { RouterModule, Routes } from '@angular/router';
// create a const and set type as Routes
const appRoutes: Routes =[
  { path:'', component:BasicsComponent },
  { path:'directives', component:DirectivesComponent },
  { path:'form', component:FormComponent },
  { path:'formlist', component: ListComponent },
  { path:'hooks', component:HooksComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    DirectivesComponent,
    FormComponent,
    ListComponent,
    HooksComponent,
    HooksChildComponent,
    TemplateDrivenFormsComponent,
    TemplateDrivenFormsTestComponent,
    ReactiveFormsComponent,
    ReactiveFormsTestComponent,
    HttpSectionComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // pass the approutes to router module

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
