export interface IObserver<T = any, U = any> {
  next: (value: T) => void;
  error: (err: U) => void;
  complete: () => void;
}

export const observer = (
  next?: (value: any) => void,
  error?: (err: any) => void,
  complete?: () => void
): IObserver => ({
  next,
  error,
  complete,
});
