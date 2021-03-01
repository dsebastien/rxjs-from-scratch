import { Observable } from './observable';
import { IObserver } from './observer';
import { Subscription } from './subscription';

export function of<ValueType>(...args: ValueType[]): Observable<ValueType> {
  function valueProducer(observer: IObserver<ValueType>): Subscription {
    args.forEach((value) => {
      observer.next(value);
    });
    observer.complete();

    return {
      unsubscribe: () => {
        // FIXME anything to do here?
      }
    };
  }

  return new Observable(valueProducer);
}
