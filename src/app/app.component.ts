import { Component } from '@angular/core';

type Some<T> = T;

type Person = { name: string };

const david: Person = { name: 'david' };

@Component({
  selector: 'my-app',
  template: `{{ person.name }}`,
})
export class AppComponent {
  person: typeof david;

  constructor() {
    this.person = david;
  }
}
