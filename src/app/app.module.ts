import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent } from './hooks-child/hooks-child.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { TemplateDrivenFormsTestComponent } from './template-driven-forms-test/template-driven-forms-test.component';

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
    TemplateDrivenFormsTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
