import {Component, OnInit} from '@angular/core';
import {TRANSACTIONS, User} from '../../services';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  data: Array<User> = [];
  amountArr: Array<number> = [];
  fullData: Array<User> = [];
  transactions: Map<string, string> = TRANSACTIONS;
  categories: Array<string> = ['income', 'outcome', 'loans', 'investments'];


  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.fullData !== []) {
        const tab = this.route.snapshot.queryParamMap.get('tab') as string;
        this.fillArray(tab)
      }
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    const response = await fetch('/assets/jsonviewer.json');
    const result = await response.json();
    const dataArr = result.data;
    this.fullData = dataArr;
    this.fillArray()
  }

  fillArray(tab: string = '0'): void {
    const name = this.transactions.get(tab.toString());
    this.data = this.fullData.filter((info: User) => info.type === name);
    while (this.amountArr.length < this.data.length) {
      this.amountArr.push(this.getRandomAmount())
    }
  }

  getRandomAmount(): number {
    return Math.round(Math.random() * 4000)
  }

}
