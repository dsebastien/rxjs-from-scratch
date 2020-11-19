import { Subscription } from './subscription';
import { IObserver } from './observer';

export class Observable {
  constructor(private producer) {}
  subscribe(observer: Partial<IObserver>): Subscription {
    return this.producer(observer);
  }
}
