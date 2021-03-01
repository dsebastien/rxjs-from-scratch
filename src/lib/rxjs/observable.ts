import { Subscription } from './subscription';
import { IObserver } from './observer';

export class Observable<ValueType> {
  constructor(private producer) {}
  subscribe(observer: Partial<IObserver<ValueType>>): Subscription {
    return this.producer(observer);
  }
}
