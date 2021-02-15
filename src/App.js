import React from "react";
import styled from "styled-components";
import { Gallery } from "./components/gallery";
import { Navigation } from "./components/navigation";
import { Profile } from "./components/profile";
import { Story } from "./components/story";

const Wrap = styled.div``;

export default function App() {
  return (
    <Wrap>
      <Navigation />
      <Profile />
      <Story />
      <Gallery />
    </Wrap>
  );
}
