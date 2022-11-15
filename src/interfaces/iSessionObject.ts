export interface ISessionObject<TValue> {
  get: () => TValue;
  set: (value: TValue) => void;
}
