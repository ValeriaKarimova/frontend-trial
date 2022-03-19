import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {AppRoutingModule} from "./app-routing.module";


const appRoutes: Routes = [
  {path: '', component: ListComponent},
  {path: 'navigator', component: ListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
