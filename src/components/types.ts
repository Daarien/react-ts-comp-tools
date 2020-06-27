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

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & OverrideProps<M, C>
  ): JSX.Element;
  (props: DefaultComponentProps<M>): JSX.Element;
}

/**
 * Props of the component if `component={Component}` is used.
 */
// prettier-ignore
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType
> = (
  & BaseProps<M>
  & Omit<React.ComponentPropsWithRef<C>, keyof CommonProps>
);

/**
 * Props if `component={Component}` is NOT used.
 */
// prettier-ignore
export type DefaultComponentProps<M extends OverridableTypeMap> = 
  & BaseProps<M>
  & Omit<React.ComponentPropsWithRef<M["defaultComponent"]>, keyof BaseProps<M>>;

export type BaseProps<M extends OverridableTypeMap> = M["props"] & CommonProps;

export interface CommonProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface OverridableTypeMap {
  props: {};
  defaultComponent: React.ElementType;
}
