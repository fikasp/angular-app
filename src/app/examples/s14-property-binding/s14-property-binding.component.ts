import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s14-property-binding',
  templateUrl: './s14-property-binding.component.html',
  styleUrls: ['./s14-property-binding.component.css']
})
export class S14PropertyBindingComponent {

  imageURL = '/assets/logo-b1a300e55fb8d38e1cccab1b7754a10b.png';

  isDisabled = false;
  counter = 2;
  inputValue = 'Example Text';
  rowsNum = 14;
  colsNum = 6;
  color = 'burlywood';

}