import { Observable } from './observable';
import { IObserver } from './observer';
import { Subscription } from './subscription';

export function fromPromise<T>(promise: Promise<T>): Observable<T> {
  return null;
}
