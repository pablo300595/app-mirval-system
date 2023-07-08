import { Component } from '@angular/core';
import { LevelCard } from 'src/app/models/level-card';
import { VideogameLevelsService } from 'src/app/modules/shared/services/videogame-levels.service';

@Component({
  selector: 'app-levels-page',
  templateUrl: './levels-page.component.html',
  styleUrls: ['./levels-page.component.scss']
})
export class LevelsPageComponent {
  levelCards: LevelCard[] = [];
  constructor(private videogameLevelsService: VideogameLevelsService) {}

  ngOnInit() {
    this.levelCards = this.videogameLevelsService.getLevels();
  }
}
