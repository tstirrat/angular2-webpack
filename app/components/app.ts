import {Component, View} from 'angular2/angular2';
import DisplayComponent from './display';

@Component({
  selector: 'app'
})
@View({
  directives: [DisplayComponent],
  template: '<h1>Hello, {{name}} <display /></h1>'
})
export default class AppComponent {
  name: string;

  constructor() {
    this.name = 'Tim';
  }
}