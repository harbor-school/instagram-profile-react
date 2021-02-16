import React from "react";
import styled from "styled-components";
import { Gallery } from "./components/gallery";
import { KeyNumbers } from "./components/key-numbers";
import { Navigation } from "./components/navigation";
import { Profile } from "./components/profile";
import { Story } from "./components/story";
import { Tabs } from "./components/tabs";
import "./styles.css";
import { MobileOnly } from "./utils/mobile";

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
        <MobileOnly>
          <KeyNumbers />
        </MobileOnly>
        <Tabs />
        <Gallery />
      </Main>
    </>
  );
}
