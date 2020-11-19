import { from } from '../from';

describe('map :', () => {
  it('should add 10 to each number', (done) => {
    const source$ = from<number[]>([1, 2, 3, 4, 5]).map<number>(
      (val) => val + 10
    );
    let result: number[] = [];
    const actual: number[] = [11, 12, 13, 14, 15];
    const observer = {
      next: (val) => (result = [...result, val]),
      error: () => {},
      complete: () => {
        expect(actual).toEqual(result);
        done();
      },
    };
    source$.subscribe(observer);
  });

  it('should map to single property', (done) => {
    const from$ = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      {
        name: 'Ryan',
        age: 50,
      },
    ]);

    const source$ = from$.map<{ name: string; age: number }>(
      (person) => person.name
    );
    let result: string[] = [];
    const actual: string[] = ['Joe', 'Frank', 'Ryan'];

    const observer = {
      next: (val: string) => (result = [...result, val]),
      error: () => {},
      complete: () => {
        expect(actual).toEqual(result);
        done();
      },
    };
    source$.subscribe(observer);
  });
});
