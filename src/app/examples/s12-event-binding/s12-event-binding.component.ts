import { Component } from '@angular/core';

@Component({
  selector: 'app-s12-event-binding',
  templateUrl: './s12-event-binding.component.html',
  styleUrls: ['./s12-event-binding.component.css']
})
export class S12EventBindingComponent {

  text: string = '';
  mousePosition = '';
  enterList: string[] = [];
  scale = 1;
  focus = '';

  onClickButton() {
    alert('Button clicked :)');
  }

  setText($event: any) {
    this.text = $event.target.value;
  }

  onEnter(value: string) {
    this.enterList.push(value);
  }

  onMouseMove(clientX: number, clientY: number) {
    this.mousePosition = clientX + ' - ' + clientY;
  }

  zoom(deltaY: number) {
    const direction = deltaY < 0 ? -1 : 1;
    this.scale += 0.1 * direction;
  }
}