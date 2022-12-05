import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s13-template-reference',
  templateUrl: './s13-template-reference.component.html',
  styleUrls: ['./s13-template-reference.component.css']
})
export class S13TemplateReferenceComponent {

  textField?: string;
  startTyping?: string;
  direction?: string;

  done() {
    console.log('Zrobione!');
  }

  wheelDirection(deltaY: number) {
    if (deltaY > 0) {
      this.direction = 'Kręcisz się w dół';
    } else if (deltaY < 0) {
      this.direction = 'Kręcisz się w górę';
    }
  }

}