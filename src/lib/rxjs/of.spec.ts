import { IObserver } from './observer';
import { of } from './of';

describe('of :', () => {
  it('should emitting a sequence of numbers', (done) => {
    const source$ = of<number>(1, 2, 3, 4, 5);
    const actual: number[] = [1, 2, 3, 4, 5];

    let result = [];
    const observer: IObserver = {
      next: (val: number) => {
        result = [...result, val];
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        expect(actual).toEqual(result);
        done();
      },
    };

    const subscribe = source$.subscribe(observer);
  });

  it('should emitting an object, array, and function', (done) => {
    const source$ = of<any>({ name: 'Brian' }, [1, 2, 3], () => 'Hello');
    const actual: any[] = [
      { name: 'Brian' },
      [1, 2, 3],
      function hello(): string {
        return 'Hello';
      },
    ];

    let result = [];
    const observer: IObserver = {
      next: (val: any) => {
        result = [...result, val];
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        expect(actual.length).toEqual(result.length);
        expect(actual[0]).toEqual(result[0]);
        expect(actual[1]).toEqual(result[1]);
        expect(actual[2]()).toEqual(result[2]());
        done();
      },
    };
    source$.subscribe(observer);
  });
});
