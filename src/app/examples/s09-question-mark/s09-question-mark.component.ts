import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s09-question-mark',
  templateUrl: './s09-question-mark.component.html',
  styleUrls: ['./s09-question-mark.component.css']
})
export class S09QuestionMarkComponent {

  dog!: Animal;

  constructor() {
    setTimeout(() => {
      this.dog = { name: 'Imię psa to Reksio' };
    }, 3000);
    }
  }
  interface Animal {
    name?: string;

}