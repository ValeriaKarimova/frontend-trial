import {Component, OnInit} from '@angular/core';
import {Card, TRANSACTIONS, User} from '../../services';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  fullData: Array<User> = [];
  cards: Array<Card> = [];
  transactions: Map<string, string> = TRANSACTIONS;

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    const response = await fetch('/assets/jsonviewer.json');
    const result = await response.json();
    this.fullData = result.data;
    this.fillArray()
  }

  fillArray() {
    for (let i = 0; i < this.transactions.size; i++) {
      const value: string| undefined = this.transactions.get(String(i));
      const card: Card = {
        length: this.fullData.filter(item => item.type === value).length,
        name: value,
        tabId: i
      }
      this.cards.push(card)
    }
  }

}
