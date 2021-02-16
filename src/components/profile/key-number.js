import React from "react";
import styled from "styled-components";

const ProfileDetailLi = styled.li`
  font-size: 16px;
  font-weight: 400;
  margin-right: 40px;
`;
const ProfileDetailSpan = styled.span`
  font-weight: 600;
`;

export function KeyNumber(props) {
  return (
    <ProfileDetailLi>
      <ProfileDetailSpan>{props.number}</ProfileDetailSpan> {props.label}
    </ProfileDetailLi>
  );
}
