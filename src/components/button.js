import React from "react";
import styled, { css } from "styled-components";

const Wrap = styled.button`
  all: unset;
  font-weight: 600;
  font-size: 14px;
  color: #0095f6;
  -webkit-text-fill-color: #0095f6;
  line-height: 18px;
  padding: 5px 9px;
  border-radius: 4px;
  /* ${(props) =>
    props.primary &&
    css`
      background: #0095f6;
      color: white;
      -webkit-text-fill-color: white;
    `} */
  ${({ primary }) =>
    primary &&
    css`
      background: #0095f6;
      color: white;
      -webkit-text-fill-color: white;
    `}
`;

export function Button({ children, primary }) {
  return <Wrap primary={primary}>{children}</Wrap>;
}
