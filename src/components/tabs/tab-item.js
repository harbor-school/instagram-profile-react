import React from "react";
import styled, { css } from "styled-components";
import { DesktopOnly, MobileOnly } from "../../utils/mobile";
import * as Icons from "../icons";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  ${({ active }) =>
    active &&
    css`
      border-top: 1px solid hsl(0, 0%, 15%);
      margin-top: -1px;
      color: hsl(0, 0%, 15%);
      @media only screen and (max-width: 735px) {
        border-top: none;
      }
    `}
`;
const Span = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: hsl(0, 0%, 56%);
  margin-left: 6px;
`;

export function TabItem({ active, icon, label }) {
  const IconComp = Icons[icon];

  return (
    <>
      <DesktopOnly>
        <Wrap
          active={active}
          style={{
            marginRight: 60
          }}
        >
          <IconComp />
          <Span>{label}</Span>
        </Wrap>
      </DesktopOnly>
      <MobileOnly>
        <IconComp size={24} fill={active ? "rgb(0, 149, 246)" : "#8e8e8e"} />
        {/* 
        {React.cloneElement(<IconComp />, {
          size: 24,
          fill: active ? "rgb(0, 149, 246)" : "#8e8e8e"
        })} */}
      </MobileOnly>
    </>
  );
}
