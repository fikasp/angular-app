import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-s08-pipes',
  templateUrl: './s08-pipes.component.html',
  styleUrls: ['./s08-pipes.component.css']
})
export class S08PipesComponent {

  title = `Pipes`;
  someDate = Date.now();
  words = ['jeden', 'dwa', 'trzy', 'cztery'];
  num = 8.7237823462034243;
  translate = {
    zima: 'winter',
    wiosna: 'spring',
    jesień: 'autumn',
    lato: 'summer',
  };
  price = 2.99;

  constructor(@Inject(LOCALE_ID) private localeId: string) {
    console.log('Locale: ', this.localeId);
  }

}