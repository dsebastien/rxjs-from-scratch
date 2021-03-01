import { Observable } from './observable';
import { IObserver } from './observer';
import { Subscription } from './subscription';

export function from<ValueType>(arg: any): Observable<ValueType> {
  function producer(observer: IObserver<any>): Subscription {
    if(Array.isArray(arg) || typeof arg === 'string') {

      Object.values(arg).forEach((value) => {
        observer.next(value);
      });
    }
    else if (arg instanceof Map) {
        arg.forEach((value: any, key: string) => {
          console.log(key, value);
          observer.next([key, value]);
        });
    } else if (typeof arg === 'object') {
      for (const [key, value] of Object.entries(arg)) {
        observer.next([key, value]);
      }
    }

    observer.complete();

    return {
      unsubscribe: () => {
        // FIXME anything to do here?
      }
    };
  }

  return new Observable(producer);
}
