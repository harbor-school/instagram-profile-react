import React from "react";
import styled from "styled-components";
import { DesktopOnly } from "../utils/mobile";
import { Button } from "./button";

const Logo = styled.img`
  height: 29px;
`;
const NavContent = styled.div`
  max-width: 935px;
  margin: 0 auto;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 735px) {
    padding: 0 20px;
  }
`;
const SearchGuide = styled.div`
  width: 215px;
  background: hsl(0, 0%, 98%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 26px;
  border-radius: 3px;
  border: 1px solid hsl(0, 0%, 86%);
`;
const SearchPlaceholder = styled.span`
  color: hsl(0, 0%, 56%);
  font-size: 14px;
  margin-left: 6px;
`;
const Mock = styled.div`
  height: 54px;
`;
const Fixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid hsl(0, 0%, 86%);
  z-index: 1;
`;

export function Navigation() {
  return (
    <nav>
      <Mock></Mock>
      <Fixed>
        <NavContent>
          <Logo alt="logo" src="/images/logo.png" />
          <DesktopOnly>
            <SearchGuide>
              <span className="search-icon"></span>
              <SearchPlaceholder>Search</SearchPlaceholder>
            </SearchGuide>
          </DesktopOnly>
          <div>
            <Button primary>Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </NavContent>
      </Fixed>
    </nav>
  );
}
