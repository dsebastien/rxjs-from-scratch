import { Subscription } from './subscription';
import { Observable } from './observable';
import { IObserver } from './observer';

export function interval(period: number): Observable<number> {
  function intervalProducer(observer: IObserver<number>): Subscription {
    let value = 0;

    const intervalId = setInterval(() => {
      observer.next(value);
      value += 1;
    }, period);

    return {
      unsubscribe: () => {
        clearInterval(intervalId);
        if(observer.complete) {
          observer.complete();
        }
      }
    };
  }

  return new Observable(intervalProducer);
}
