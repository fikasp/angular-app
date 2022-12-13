import { Component, OnInit } from '@angular/core';
import { SelectedDog } from './child/child.component';

@Component({
  selector: 'app-s22-event-emitter',
  templateUrl: './s22-event-emitter.component.html',
  styleUrls: ['./s22-event-emitter.component.css']
})

export class S22EventEmitterComponent {
  onStringEvent($event: string) {
    console.log('string', $event);
  }

  onBooleanEvent($event: boolean) {
    console.log('boolean', $event);
  }

  onNumberEvent($event: number) {
    console.log('number', $event);
  }

  onVoidEvent() {
    console.log('Void event');
  }

  onDateEvent($event: Date) {
    console.log('Date', $event);
  }

  onObjectEvent($event: SelectedDog) {
    console.log('SelectedDog', $event);
  }
}