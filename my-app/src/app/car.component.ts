import { Component } from '@angular/core';

@Component({
  selector: 'car-part',
  template: `<h1>{{CarName}}</h1>`
})
export class CarComponent {
    CarName = 'MyFirstCarComponent';
}
