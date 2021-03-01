export interface IObserver<ValueType = any, ErrorType = any> {
  next: (value: ValueType) => void;
  error: (err: ErrorType) => void;
  complete: () => void;
}

export const observer = <ValueType, ErrorType>(
  next?: (value: ValueType) => void,
  error?: (err: ErrorType) => void,
  complete?: () => void
): IObserver => ({
  next,
  error,
  complete,
});
