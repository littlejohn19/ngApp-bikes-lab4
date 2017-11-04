import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent implements OnInit {
  @Input('bike') item;

  constructor() {
  }

  ngOnInit() {
  }

  add(id) {
    this.item.order++;
  }

  remove(id) {
    this.item.order--;
  }

  clear(id) {
    this.item.order = 0;
  }
}
