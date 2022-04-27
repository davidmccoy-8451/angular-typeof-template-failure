import { Component } from '@angular/core';

const person = { name: 'david' };

@Component({
  selector: 'my-app',
  template: `{{ person.name }}`,
})
export class AppComponent {
  person: typeof person = person;
}
