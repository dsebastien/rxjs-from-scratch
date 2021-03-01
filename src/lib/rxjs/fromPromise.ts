import { Observable } from './observable';
import { IObserver } from './observer';
import { Subscription } from './subscription';

export function fromPromise<ValueType>(arg: Promise<ValueType>): Observable<ValueType> {
  function producer(observer: IObserver<any>): Subscription {

    arg.then((value) => {
      if(observer.next) {
        observer.next(value);
      }
    }).catch((err) => {
      if(observer.error) {
        observer.error(err);
      }
    }).finally(() => {
      if(observer.complete) {
        observer.complete();
      }
    });

    return {
      unsubscribe: () => {
        // FIXME anything to do here?
      }
    };
  }

  return new Observable(producer);
}
