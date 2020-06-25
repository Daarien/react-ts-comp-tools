import { ComponentProps } from "react";
import styled from "styled-components";

type Justify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-around"
  | "space-between";

type Align = "flex-start" | "center" | "flex-end" | "stretch";

type Direction = "row" | "column";

type FlexBox = ComponentProps<"div"> & {
  justify?: Justify;
  align?: Align;
  direction?: Direction;
  wrap?: boolean;
};

const Flex = styled.div<FlexBox>`
  display: flex;
  justify-content: ${({ justify }) => justify || ""};
  align-items: ${({ align }) => align || ""};
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
`;

export default Flex;
