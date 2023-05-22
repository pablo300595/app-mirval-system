import { Component } from '@angular/core';
import { contactImage } from 'src/app/environment';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contactImage: Image = contactImage;
}
