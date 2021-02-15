import React from "react";
import styled from "styled-components";
import { DesktopOnly, MobileOnly } from "../utils/mobile";
import { Button } from "./button";

const Header = styled.header`
  margin-bottom: 44px;
  @media only screen and (max-width: 735px) {
    display: block;
    margin-bottom: 0px;
  }
`;
const HeaderWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 30px;
  @media only screen and (max-width: 735px) {
    display: flex;
    padding: 14px;
    column-gap: 0px;
  }
`;
const ProfilePic = styled.div`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 735px) {
    width: 77px;
    height: 77px;
    margin-right: 28px;
  }
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 1000px;
  border: 1px solid hsl(0, 0%, 86%);
  @media only screen and (max-width: 735px) {
    width: 100%;
    height: 100%;
  }
`;
const ProfileH2 = styled.h2`
  font-size: 28px;
  font-weight: 300;
  @media only screen and (max-width: 735px) {
    display: inline-block;
    margin-bottom: 12px;
  }
`;
const ProfileIcon = styled.span`
  margin-left: 8px;
  @media only screen and (max-width: 735px) {
    display: inline-block;
  }
`;
const ProfileButtonWrap = styled.div`
  margin-left: 20px;
  @media only screen and (max-width: 735px) {
    display: block;
    margin-left: 0px;
  }
`;
const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 735px) {
    display: block;
  }
`;

const ProfileDetailLi = styled.li`
  font-size: 16px;
  font-weight: 400;
  margin-right: 40px;
`;
const ProfileDetailSpan = styled.span`
  font-weight: 600;
`;
const ProfileDetailUl = styled.ul`
  display: flex;
`;
const ProfileDescriptionH1 = styled.h1`
  font-weight: 600;
  line-height: 24px;
  @media only screen and (max-width: 735px) {
    line-height: 20px;
  }
`;
const ProfileDescriptionSpan = styled.span`
  font-weight: 400;
  line-height: 24px;
  @media only screen and (max-width: 735px) {
    line-height: 20px;
  }
`;
const ProfileDescriptionA = styled.a`
  color: hsl(209, 100%, 21%);
`;
const ProfileDescriptions = styled.div`
  @media only screen and (max-width: 735px) {
    padding-left: 16px;
    padding-bottom: 21px;
    font-size: 14px;
    margin-bottom: 0px !important;
  }
`;
const ProfileRow = styled.div`
  margin-bottom: 20px;
`;

export function Profile() {
  return (
    <Header>
      <HeaderWrap>
        <ProfilePic>
          <ProfileImg src="/images/profile-logo.jpg" alt="profile-logo" />
        </ProfilePic>
        <div>
          <ProfileRow>
            <ProfileTitle>
              <ProfileH2>apple</ProfileH2>
              <ProfileIcon className="verfied-icon"></ProfileIcon>
              <ProfileButtonWrap>
                <Button primary>Follow</Button>
              </ProfileButtonWrap>
            </ProfileTitle>
          </ProfileRow>
          <DesktopOnly>
            <ProfileRow>
              <ProfileDetailUl>
                <ProfileDetailLi>
                  <ProfileDetailSpan>722</ProfileDetailSpan> posts
                </ProfileDetailLi>
                <ProfileDetailLi>
                  <ProfileDetailSpan>25.1m</ProfileDetailSpan> followers
                </ProfileDetailLi>
                <ProfileDetailLi>
                  <ProfileDetailSpan>6</ProfileDetailSpan> following
                </ProfileDetailLi>
              </ProfileDetailUl>
            </ProfileRow>
            <ProfileDescriptions
            // class="row last"
            >
              <ProfileDescriptionH1>apple</ProfileDescriptionH1>
              <ProfileDescriptionSpan>
                Everyone has a story to tell.
                <br />
                Tag <ProfileDescriptionA>#ShotoniPhone</ProfileDescriptionA> to
                take part.
              </ProfileDescriptionSpan>
            </ProfileDescriptions>
          </DesktopOnly>
        </div>
      </HeaderWrap>
      <MobileOnly>
        <ProfileRow>
          <ProfileDescriptions>
            <ProfileDescriptionH1>apple</ProfileDescriptionH1>
            <ProfileDescriptionSpan>
              Everyone has a story to tell.
              <br />
              Tag <ProfileDescriptionA>#ShotoniPhone</ProfileDescriptionA> to
              take part.
            </ProfileDescriptionSpan>
          </ProfileDescriptions>
        </ProfileRow>
      </MobileOnly>
    </Header>
  );
}
