import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s14-property-binding',
  templateUrl: './s14-property-binding.component.html',
  styleUrls: ['./s14-property-binding.component.css']
})
export class S14PropertyBindingComponent {

  imageURL = 'logo.png';

  isDisabled = false;
  counter = 2;
  inputValue = 'Example Text';
  rowsNum = 14;
  colsNum = 6;
  color = 'burlywood';

}