import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:
    `
    <style>
      .test { 
        border : solid red 1px;
     }
    </style>
    <h1 class="test">Hello {{name}} testing</h1>
    <button (click)="click()">click me</button>
    <button (click)="click2()">click me 2</button>
    `
})
export class AppComponent {
    name = 'Angular';

    click() {
        alert('clicked');
    }
    click2() {
        alert('clicked2');
    }
}