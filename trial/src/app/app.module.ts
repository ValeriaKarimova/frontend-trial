import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from "./app-routing.module";
import { SummaryComponent } from './summary/summary.component';


const appRoutes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'navigator', component: ListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SummaryComponent,
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
