import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s15-two-way-binding',
  templateUrl: './s15-two-way-binding.component.html',
  styleUrls: ['./s15-two-way-binding.component.css']
})
export class S15TwoWayBindingComponent {

  name = '';
  surname = '';
  profession = '';

  info?: string;

  onSend() {
    this.info = `${this.name} ${this.surname} ${this.profession}`;
    this.name = '';
    this.surname = '';
    this.profession = '';
  }

  age?: number | null;
  summary = '';

  isDisable() {
    return this.name === '' || this.surname === '' || this.age === null;
  }

  print() {
    this.summary = `${this.name} - ${this.surname} - ${this.age}`;
    this.name = '';
    this.surname = '';
    this.age = null;
  }

}