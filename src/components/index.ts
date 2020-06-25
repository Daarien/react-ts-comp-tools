export interface CommonProps {}

export type StandartProps<C, Removals extends keyof C = never> = Omit<
  C,
  Removals
> & {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export { default as Button } from "./Button";
export { default as Checkbox } from "./Checkbox";
export { default as Flex } from "./Flex";
export { default as IconButton } from "./IconButton";
export { default as Input } from "./Input";
export { default as Paper } from "./Paper";
export { default as TextField } from "./TextField";
