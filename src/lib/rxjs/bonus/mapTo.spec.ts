// import {} from './observable';

// describe('mapTo :', () => {
//   it('should every emission to "a" ', (done) => {
//     const source$: Observable = Observable.from([1, 2, 3, 4, 5]).mapTo('a');
//     let result: string[] = [];
//     const actual: string[] = ['a', 'a', 'a', 'a', 'a'];
//     const subscribe = source$.subscribe(
//       observer(
//         (val) => (result = [...result, val]),
//         () => {},
//         () => {
//           expect(actual).deep.equals(result);
//           done();
//         }
//       )
//     );
//   });
// });
