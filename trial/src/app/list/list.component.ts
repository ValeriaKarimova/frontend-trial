import {Component, OnInit} from '@angular/core';
import {INFO, User} from '../../services';
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
  currentTab: string = '0';
  info: Map<string, string> = INFO;
  categories: Array<string> = ['income', 'outcome', 'loans', 'investments'];


  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.fullData !== []) {
        const tab = this.route.snapshot.queryParamMap.get('tab') as string;
        this.currentTab = tab;
        this.fillArray()
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

  fillArray(): void {
    const name = this.info.get(this.currentTab.toString());
    this.data = this.fullData.filter((info: User) => info.type === name);
    while (this.amountArr.length < this.data.length) {
      this.amountArr.push(this.getRandomAmount())
    }
  }

  getRandomAmount(): number {
    return Math.round(Math.random() * 4000)
  }

}
