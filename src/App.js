import React from "react";
import styled from "styled-components";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Profile } from "./components/profile";
import { Story } from "./components/story";

const Wrap = styled.div``;

export default function App() {
  return (
    <Wrap>
      <Header />
      <Profile />
      <Story />
      <Gallery />
    </Wrap>
  );
}
