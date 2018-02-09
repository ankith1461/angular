import { Component } from '@angular/core';

@Component({
  selector: 'home-part',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
    NavbarName = 'Angular JS App';
    HomePageTitle = 'View My Series List';
    HomeSubTitle = 'All Fav Tv series';
    HomeSubtitleInfo = 'to see all the Infor related to fav tv series';
    MoreContent = 'Load the Genres';
}
