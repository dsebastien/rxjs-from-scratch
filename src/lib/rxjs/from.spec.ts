import { from } from './from';

describe('from:', () => {
  it('should converts an array to an Observable', (done) => {
    const source$ = from([1, 2, 3, 4, 5]);
    let result: number[] = [];
    const actual: number[] = [1, 2, 3, 4, 5];

    const observer = {
      next: (val: number) => {
        result = [...result, val];
      },
      error: (err: any) => {
        console.log('error', err);
      },
      complete: () => {
        expect(actual).toEqual(result);
        done();
      },
    };
    source$.subscribe(observer);
  });

  it('should convert a string to an Observable', (done) => {
    const actual: string[] = [
      'H',
      'e',
      'l',
      'l',
      'o',
      ' ',
      'W',
      'o',
      'r',
      'l',
      'd',
    ];
    const value = actual.join('');
    const source$ = from(value);
    let result: string[] = [];

    const observer = {
      next: (val: any) => {
        result = [...result, val];
      },
      error: (err: any) => {
        console.log('error');
      },
      complete: () => {
        expect(actual.length).toEqual(result.length);
        done();
      },
    };

    source$.subscribe(observer);
  });

  it('should convert a collection to an Observable', (done) => {
    const map: Map<number, string> = new Map();
    map.set(1, 'Hi');
    map.set(2, 'Bye');
    const source$ = from(map);
    const actual: any[][] = [
      [1, 'Hi'],
      [2, 'Bye'],
    ];
    let result: any[][] = [];
    const observer = {
      next: (val: any) => {
        result = [...result, val];
      },
      error: (err) => {
        console.log('error');
      },
      complete: () => {
        expect(actual.length).toEqual(result.length);
        expect(actual[0]).toEqual(result[0]);
        expect(actual[1]).toEqual(result[1]);
        done();
      },
    };
    source$.subscribe(observer);
  });

  xit('should converts an promise to an Observable', (done) => {
    const actual = 'Hello World!';
    const promise: Promise<string> = new Promise((resolve) => resolve(actual));
    const source$ = from(promise);
    let result: string;

    const observer = {
      next: (val) => {
        result = val;
      },
      error: () => {
        console.log('error');
      },
      complete: () => {
        expect(actual).toEqual(result);
        done();
      },
    };

    source$.subscribe(observer);
  });
});
