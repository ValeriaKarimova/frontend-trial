import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" routerLink="">Income</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/outcome">Outcome</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink="/loans">Loans</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  routerLink="/investments">Investments</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trial';
}
