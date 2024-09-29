import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BbProj3';
  profiles = [ // Add dummy profiles
    {
      name: 'Rahul Roy',
      about: 'About Winner 1. Lorem ipsum dolor sit amet.',
      photo: '/assets/s1Winner.webp',
      profileLink: 'https://www.instagram.com/officialrahulroy/?hl=en'
    },
    {
      name: 'Ashutosh kaushik',
      about: 'About Winner 2. Lorem ipsum dolor sit amet.',
      photo: '/assets/s2winner.webp',
      profileLink: 'https://www.instagram.com/iamashutoshkaushik/?hl=en'
    },
    {
      name: 'Vindu Dara Singh',
      about: 'About Winner 3. Lorem ipsum dolor sit amet.',
      photo: '/assets/s3Winner.webp',
      profileLink: 'https://www.instagram.com/vindusingh/?hl=en'
    },
    {
      name: 'Shweta Tiwari',
      about: 'About Winner 4. Lorem ipsum dolor sit amet.',
      photo: '/assets/s4winner.webp',
      profileLink: 'https://www.instagram.com/shweta.tiwari/?hl=en'
    }
  ];
}
