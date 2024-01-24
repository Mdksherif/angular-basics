import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormComponent } from './form/form.component';
import { HooksComponent } from './hooks/hooks.component';
import { HttpSectionComponent } from './http-section/http-section.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { PaginationsComponent } from './paginations/paginations.component';

const appRoutes: Routes = [
  { path:'', component:BasicsComponent },
  { path:'directives', component:DirectivesComponent },
  { path:'form', component:FormComponent },
  { path:'hooks', component:HooksComponent },
  { path:'http', component:HttpSectionComponent},
  { path:'httptest', component:HttpTestComponent },
  { path:'reactiveForms', component: ReactiveFormsComponent},
  { path:'templateForms', component: TemplateDrivenFormsComponent},
  { path:'paginations', component: PaginationsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
