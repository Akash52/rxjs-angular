import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, Observable, timer } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const interal$ = interval(1000)
    interal$.subscribe(val => console.log("Stream value: ", val));
    interal$.subscribe(val => console.log("Stream value 2: ", val));

    const timer$ = timer(5000, 1000);
    timer$.subscribe(val => console.log("Timer value: ", val));

    fromEvent(document, 'click')
      .subscribe((event: MouseEvent) => {
        console.log("Mouse click event: ", event);
      });
  }
}
