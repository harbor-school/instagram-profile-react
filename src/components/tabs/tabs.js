import React from "react";
import styled, { css } from "styled-components";
import { TabItem } from "./tab-item";

const TabsWrap = styled.div`
  border-top: 1px solid hsl(0, 0%, 86%);
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 735px) {
    display: flex;
    justify-content: space-around;
    height: 44px;
    align-items: center;
    border-top: 1px solid rgb(219, 219, 219);
  }
`;

export function Tabs() {
  return (
    <TabsWrap>
      <TabItem active label="POSTS" icon="Posts" />
      <TabItem label="IGTV" icon="Igtv" />
      <TabItem label="TAGGED" icon="Tagged" />
    </TabsWrap>
  );
}
