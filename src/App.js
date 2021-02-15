import React from "react";
import styled from "styled-components";
import { Gallery } from "./components/gallery";
import { MobileTabs } from "./components/mobile-tabs";
import { Navigation } from "./components/navigation";
import { Profile } from "./components/profile";
import { Story } from "./components/story";
import { Tabs } from "./components/tabs";
import "./styles.css";
import { DesktopOnly, MobileOnly } from "./utils/mobile";

const Main = styled.main`
  padding: 30px 20px 0px 20px;
  max-width: 935px;
  margin: 0 auto;
  @media only screen and (max-width: 735px) {
    padding: 0;
  }
`;

export default function App() {
  return (
    <>
      <Navigation />
      <Main>
        <Profile />
        <Story />
        <DesktopOnly>
          <Tabs />
        </DesktopOnly>
        <MobileOnly>
          <MobileTabs />
        </MobileOnly>
        <Gallery />
      </Main>
    </>
  );
}
