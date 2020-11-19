import { Component, OnInit } from '@angular/core';
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
    // data stream
    const observer: Observer = {
      next(value: any) {
        console.log(value);
      },
      error(err: any) {
        console.log(err);
      },
      complete() {
        console.log('completed was called');
      },
    };

    function producer(observer: Observer) {
      let counter = 0;
      const id = setInterval(() => {
        observer.next(counter++);
        console.log(counter);
      }, 1000);

      return {
        unsubscribe() {
          observer.complete();
          clearInterval(id);
        },
      };
    }

    const interval$ = new Observable(producer);

    const observer1 = {
      next(value) {
        console.log('first ', value);
      },
      // error(err) {
      //   console.log(err);
      // },
      complete() {
        console.log('completed...');
      },
    };

    const subscription = interval$.subscribe(observer1);

    setTimeout(() => {
      subscription.unsubscribe();
    }, 2000);
  }
}
