import { Component } from '@angular/core';

@Component({
  selector: 'home-part',
  template: `<h4>{{Name}}</h4>`
})
export class HomeComponent {
    Name = 'Welcome to Home Page';
}
