import { IObserver } from './observer';
import { fromPromise } from './fromPromise';
describe('fromPromise :', () => {
  it('should convert a promise to an Observable', (done) => {
    const actual = 'Hello World!';
    const promise: Promise<string> = new Promise((resolve) => resolve(actual));
    const source = fromPromise(promise);

    let result: string;
    const observer: IObserver = {
      next: (val: string) => {
        result = val;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        expect(actual).toEqual(result);
        done();
      },
    };

    source.subscribe(observer);
  });

  it('should error in case the promise is rejected', (done) => {
    const actual = 'Error message';
    const promise: Promise<string> = new Promise((_, reject) => reject(actual));
    const source = fromPromise(promise);

    let result: string;
    const observer: IObserver = {
      next: (val: string) => {},
      error: (err: any) => {
        result = err;
        expect(actual).toEqual(result);
      },
      complete: () => {
        done();
      },
    };

    source.subscribe(observer);
  });
});
