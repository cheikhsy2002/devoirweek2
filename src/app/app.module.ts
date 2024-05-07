import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddclassComponent } from './addclass/addclass.component';
import { AddeleveComponent } from './addeleve/addeleve.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddclassComponent,
    AddeleveComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'Addclass', component: AddclassComponent},
      {path: 'Addeleve', component: AddeleveComponent},
    ]),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
