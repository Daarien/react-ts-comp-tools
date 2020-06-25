type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;

export type OverridableStringUnion<T, U = {}> = GenerateStringUnion<
  Overwrite<T, U>
>;

export type Overwrite<T, U> = Omit<T, keyof U> & U;
