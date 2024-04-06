import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddclassComponent } from './addclass/addclass.component';
import { AddeleveComponent } from './addeleve/addeleve.component';
import { ListclassComponent } from './listclass/listclass.component';
import { ListeleveComponent } from './listeleve/listeleve.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddclassComponent,
    AddeleveComponent,
    ListclassComponent,
    ListeleveComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'Addclass', component: AddclassComponent},
      {path: 'Addeleve', component: AddeleveComponent},
      {path: 'Listclass', component: ListclassComponent},
      {path: 'Listeleve', component: ListeleveComponent}
    ]),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
