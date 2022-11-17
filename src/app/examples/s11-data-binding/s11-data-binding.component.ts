import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s11-data-binding',
  templateUrl: './s11-data-binding.component.html',
  styleUrls: ['./s11-data-binding.component.css']
})
export class S11DataBindingComponent {

  idValue = "hello2";
  className = "font";
  color = "brown";
  text = "Hello World!";
  disable = true;

  ngOnInit() {
    this.changeProperty();
    this.initPropertyEvent();
    this.initListener();
  }

  changeProperty() {
    const element = document.getElementById("hello");
    element!.id = "hello3";
    element!.className = "font";
    element!.style.color = "red";
  }

  initPropertyEvent() {
    const button = document.getElementById("propertyEventBtn");
    button!.onclick = function() {
      alert("Hello from Property Event!");
    };
  }

  initListener() {
    const button = document.getElementById("listenerBtn");
    button!.addEventListener("click", this.eventHandler);
  }

  showAlert() {
    alert("Hello from Angular Event");
  }

  private eventHandler(){
    alert("Hello from Event Listener!")
  }

}