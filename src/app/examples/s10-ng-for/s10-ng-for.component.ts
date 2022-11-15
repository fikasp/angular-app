import { Component, OnInit } from '@angular/core';
import { personData } from './data';

@Component({
  selector: 'app-s10-ng-for',
  templateUrl: './s10-ng-for.component.html',
  styleUrls: ['./s10-ng-for.component.css']
})
export class S10NgForComponent {
  
  persons = personData;

  list = ['jeden', 'dwa', 'trzy', 'cztery', 'pięć'];

  weeks = {
    monday: 'Ponieziałek',
    tuesday: 'Wtorek',
    wednesday: 'Środa',
    thursday: 'Czwartek',
    friday: 'Piątek',
    saturday: 'Sobota',
    sunday: 'Niedziela',
  };

  frameworks = [
    'Angular',
    'React',
    'Vue',
    'Ember',
    'Backbone',
    'Express',
    'Django',
    'Rails',
    'Laravel',
    'Spring',
  ];

  cars = [
    {
      mark: 'Opel',
      model: 'Corsa',
    },
    {
      mark: 'Nissan',
      model: 'Juke',
    },
    {
      mark: 'Fiat',
      model: 'Tipo',
    },
    {
      mark: 'Skoda',
      model: 'Oktavia',
    },
  ];

  carsObj = {
    Opel: 'Corsa',
    Nissan: 'Juke',
    Fiat: 'Tipo',
    Skoda: 'Oktavia',
  };

}