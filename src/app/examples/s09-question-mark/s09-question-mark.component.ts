import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s09-question-mark',
  templateUrl: './s09-question-mark.component.html',
  styleUrls: ['./s09-question-mark.component.css']
})
export class S09QuestionMarkComponent {
  someObject!: Foo;
  dog!: Animal;

  constructor() {
    setTimeout(() => {
      this.dog = { name: 'Imię psa to Reksio' };
    }, 3000);

    setTimeout(() => {
      this.someObject = { text: 'Inicjalizacja z opóźnieniem' };
    }, 3000);

    setTimeout(() => {
      const data = { info: 'To działa!' };
      this.someObject = { ...this.someObject, data };
    }, 5000);

  }
}

interface Animal {
  name?: string;
}
interface Foo {
  text?: string;
  data?: MetaData;
}
interface MetaData {
  info: string;
}
