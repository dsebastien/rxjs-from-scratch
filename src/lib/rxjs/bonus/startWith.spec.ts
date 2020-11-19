// describe('startWith :', () => {
//   it('should start with on number sequence', (done) => {
//     const source$: Observable = Observable.from([1, 2, 3, 4, 5]);
//     let result: number[] = [];
//     const actual: number[] = [0, 1, 2, 3, 4, 5];
//     const subscribe = source$.startWith(0).subscribe(
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

//   it('should start with multiple values', (done) => {
//     const source$: Observable = Observable.from([1, 2, 3, 4, 5]);
//     let result: number[] = [];
//     const actual: number[] = [-1, 0, 1, 2, 3, 4, 5];
//     const subscribe = source$.startWith(-1, 0).subscribe(
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
