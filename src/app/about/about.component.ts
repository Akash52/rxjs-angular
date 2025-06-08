import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('click', evt => {
      console.log('click', evt);
      setTimeout(() => {
        console.log('setTimeout called');
        let counter = 0;
        setInterval(() => {
          console.log('counter', counter);
          counter++;
        }, 1000);
      }, 3000);
    })
  }
}
