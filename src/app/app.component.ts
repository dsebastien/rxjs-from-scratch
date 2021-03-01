import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { share } from 'rxjs/operators';
import { Observable } from '../lib/rxjs';

interface Observer {
  next(val: any): void;
  error(err: any): void;
  complete(): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // create stream of data
    // cold observable
    const interval$ = interval(1000);

    // Hot observable with share
    // const interval$ = interval(1000).pipe(share());

    const observer = {
      next(value: any) {
        console.log(value, 'next');
      },
      error(err: any) {
        console.log(err);
      },
      complete() {
        console.log('competed');
      },
    };
    interval$.subscribe(observer);
  }
}
