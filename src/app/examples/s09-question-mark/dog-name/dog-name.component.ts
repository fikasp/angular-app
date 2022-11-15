import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-name',
  template: `
    <span>{{ name }}</span>
  `,
})
export class S09DogNameComponent {
  @Input() name: string | undefined;
}