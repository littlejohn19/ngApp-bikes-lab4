import { Injectable } from '@angular/core';
import { bikes } from '../data';

@Injectable()
export class DataService {

  constructor() {
  }

  getAll() {
    return bikes;
  }

  getById(id) {
    return bikes[+id - 1];
  }
}
