import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s14-property-binding',
  templateUrl: './s14-property-binding.component.html',
  styleUrls: ['./s14-property-binding.component.css']
})
export class S14PropertyBindingComponent {

  imageURL = '../../../assets/logo.png';

  isDisabled = false;
  counter = 2;
  inputValue = 'Example Text';
  rowsNum = 6;
  colsNum = 6;
  color = 'burlywood';

  blackDiv = 'black';
  yellowDiv = 'yellow';
  colorSwitch = 'green';
  text = 'Wpisz coś';
  htmlText =
    '<h2>Anglar jest fajny</h2><blockquote>Ale trzeba się dużo uczyć</blockquote>';

}