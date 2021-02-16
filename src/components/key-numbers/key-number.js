import React from "react";
import styled from "styled-components";

const ProfileDetailLi = styled.li`
  font-size: 16px;
  font-weight: 400;
  margin-right: 40px;
  @media only screen and (max-width: 735px) {
    font-size: 14px;
    font-weight: 400;
    color: rgb(142, 142, 142);
    line-height: 18px;
    text-align: center;
    margin-right: 0;
  }
`;
const ProfileDetailSpan = styled.span`
  font-weight: 600;
  @media only screen and (max-width: 735px) {
    font-weight: 600;
    color: rgb(38, 38, 38);
    display: block;
  }
`;

export function KeyNumber(props) {
  return (
    <ProfileDetailLi>
      <ProfileDetailSpan>{props.number}</ProfileDetailSpan> {props.label}
    </ProfileDetailLi>
  );
}
