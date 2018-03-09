import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Counter';
  cnt: number = 0;

  ngOnInit () {
    setInterval( () => this.cnt += 1, 1000);
  }

  resetTimer() {
    this.cnt = 0;
  }
}
