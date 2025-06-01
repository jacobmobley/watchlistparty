import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleslideComponent } from './titleslides/titleslide';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.html',
  standalone: true,
  imports: [CommonModule, TitleslideComponent]
})
export class MainContent {
  // Example movies array
  movies = [
    {
      title: 'The Shawshank Redemption',
      imageUrl: 'https://posters.movieposterdb.com/05_03/1994/0111161/l_8494_0111161_3bb8e662.jpg'
    },
    {
      title: 'Dragon Ball Z',
      imageUrl: 'https://xl.movieposterdb.com/14_03/1996/214341/xl_214341_186a3350.jpg'
    },
    {
      title: 'Death Note',
      imageUrl: 'https://posters.movieposterdb.com/19_12/2017/5768138/l_5768138_725783a7.jpg'
    }
  ];
}