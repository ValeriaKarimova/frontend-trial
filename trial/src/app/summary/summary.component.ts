import {Component, OnInit} from '@angular/core';
import {Card, INFO, User} from '../../services';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  fullData: Array<User> = [];
  cards: Array<Card> = [];
  info: Map<string, string> = INFO;

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
    for (let i = 0; i < this.info.size; i++) {
      const value: string| undefined = this.info.get(String(i));
      const card: Card = {
        length: this.fullData.filter(item => item.type === value).length,
        name: value,
        tabId: i
      }
      this.cards.push(card)
    }
  }

}
