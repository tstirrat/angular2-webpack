import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'display'
})
@View({
  template: `
   <p>Display: {{ display }}</p>
  `
})
export default class DisplayComponent {
  display: string;

  constructor() {
    this.display = 'Cool things';
  }
}