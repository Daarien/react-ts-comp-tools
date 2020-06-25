import React from "react";
import styled from "styled-components";
import { OverridableStringUnion } from "../types";

export type GridItemsAlignment =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

export type GridContentAlignment =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around";

export type GridDirection = "row" | "row-reverse" | "column" | "column-reverse";

export type GridJustification =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type GridWrap = "nowrap" | "wrap" | "wrap-reverse";

export type GridSize =
  | "auto"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type BreakpointDefaults = Record<"xs" | "sm" | "md" | "lg" | "xl", true>;

export type Breakpoint = OverridableStringUnion<BreakpointDefaults, {}>;

export type BreakpointValues = { [key in Breakpoint]: number };

export interface Breakpoints {
  keys: Breakpoint[];
  values: BreakpointValues;
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (start: Breakpoint | number, end: Breakpoint | number) => string;
  only: (key: Breakpoint) => string;
  width: (key: Breakpoint) => number;
}

export type GridProps = Partial<Record<Breakpoint, boolean | GridSize>> & {
  alignContent?: GridContentAlignment;
  alignItems?: GridItemsAlignment;
  container?: boolean;
  direction?: GridDirection;
  item?: boolean;
  justify?: GridJustification;
  wrap?: GridWrap;
} & React.ComponentProps<"div">;

function Grid({ children, className }: GridProps) {
  return <div className={className}>{children}</div>;
}

export default styled(Grid)``;
