import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { IncomeComponent } from './income/income.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { LoansComponent } from './loans/loans.component';
import { InvestmentsComponent } from './investments/investments.component';


const appRoutes: Routes = [
  {path: '', component: IncomeComponent},
  {path: 'outcome', component: OutcomeComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'investments', component: InvestmentsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    OutcomeComponent,
    LoansComponent,
    InvestmentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
