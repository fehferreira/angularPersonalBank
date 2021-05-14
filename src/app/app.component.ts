import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'personalbank';
  transferencia: any;

  transfer($event){
    console.log($event);
    this.transferencia = $event;
  }
}
