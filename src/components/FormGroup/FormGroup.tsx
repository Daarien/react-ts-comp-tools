import React from "react";
import styled from "../styled-components";
import clsx from "clsx";

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  row?: boolean;
}

function FormGroup(props: FormGroupProps) {
  const { className, row, ...other } = props;
  return <div className={clsx({ row }, className)} {...other} />;
}

export default styled(FormGroup)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &.row {
    flex-direction: row;
  }
`;
