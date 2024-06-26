import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>
 
    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="resetting()">Reset</button>
    <button (click)="dicreaseBy()">-1</button>
 `
})

export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number =10;

  increaseBy(value:number):void {
    this.counter += value;
  }

  dicreaseBy():void {
    this.counter -=1;
  }
   
  resetting():void {
    this.counter=10;
  }
   
}

