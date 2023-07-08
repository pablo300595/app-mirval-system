import { Injectable } from '@angular/core';
import { LevelCard } from 'src/app/models/level-card';

@Injectable({
  providedIn: 'root'
})
export class VideogameLevelsService {

  constructor() { }

  getLevels(): LevelCard[] {
    return [
      { title: 'Xbox Series S', price: '$250' },
      { title: 'Xbox Series X', price: '$499' },
      { title: 'Play Station 5', price: '$499' },
      { title: 'Nintendo Switch', price: '$300' }
    ]
  }
}
