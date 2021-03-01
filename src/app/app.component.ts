import { Component, OnInit } from '@angular/core';

interface Observer {
  next(val: any): void;
  error(err: any): void;
  complete(): void;
}

interface Subscription {
  unsubscribe(): void;
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

    function producer(observer: Observer): Subscription {
      let second = 0;
      const id = setInterval(() => {
        observer.next(second++);
      }, 1000);

      return {
        unsubscribe() {
          clearInterval(id);
        },
      };
    }

    class Observable {
      constructor(private producer) {}
      subscribe(observer: Observer) {
        return this.producer(observer);
      }
    }

    const interval$ = new Observable(producer);

    // const interval$ = interval(1000);
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
    const subscription = interval$.subscribe(observer);

    setTimeout(() => {
      // unsubscribe to the stream
      // Memory leaks...
      subscription.unsubscribe();
    }, 4000);
  }
}
