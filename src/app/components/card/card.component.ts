import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  standalone: true,
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() price: string = '';
  @Input() description: string = '';
  @Input() cardImage: Image = {
    name: 'water-dragon', 
    url: 'https://storage.cloud.google.com/landscapes-bucket/assets/water-dragon.jpeg'
  };
}
