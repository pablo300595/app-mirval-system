import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aboutImage } from 'src/app/environment';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  aboutImage: Image = aboutImage;
  data$ = this.activatedRoute.data;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {}
}
