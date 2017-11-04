import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'group-bike',
  templateUrl: './group-bike.component.html',
  styleUrls: ['./group-bike.component.css']
})
export class GroupBikeComponent implements OnInit {

  bikes: any[];

  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.bikes = this.service.getAll();
  }
}
