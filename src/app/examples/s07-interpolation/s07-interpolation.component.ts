import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s07-interpolation',
  templateUrl: './s07-interpolation.component.html',
  styleUrls: ['./s07-interpolation.component.css']
})
export class S07InterpolationComponent {

  title = 'Przykłady interpolacji';
  happy = true;
  dog = { name: 'Reksio' };

  getInfo() {
    return 'Tekst z metody';
  }

  get info() {
    return 'Tekst z gettera';
  }

  getNumber() {
    return 2;
  }

  getPerson() {
    return {
      name: 'Jhon',
      age: 23,
    };
  }

  //ćwiczenia

  title2 = 'ćwiczenia';
  num1 = 40;
  num2 = '4';
  falsity = false;

  dog2 = {
    name: 'Blacky',
    age: 4,
    color: 'czarny',
  };

  // pól private nie wyświetlamy, jest to pole do gettera randomBoolean
  private booleans = [true, false];

  quotation1(): string {
    return 'Życia nie można wybrać, ale można z niego coś zrobić. - Peter Lippert';
  }

  get quotation2(): string {
    return 'Bądź dobrej myśli, bo po co być złej. - Stanisław Lem';
  }

  // losuje true lub false z pola booleans
  get randomBoolean(): boolean {
    return this.booleans[Math.round(Math.random())];
  }

  divider() {
    return 3;
  }

}