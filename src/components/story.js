import React from "react";
import styled from "styled-components";
import { DesktopOnly } from "../utils/mobile";

const Stories = styled.div`
  display: flex;
  justify-content: start;
  padding: 0 24px;
  overflow-x: scroll;
  position: relative;
  margin-bottom: 44px;
  @media only screen and (max-width: 735px) {
    padding: 0;
    margin-bottom: 21px;
  }
`;
const StoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  @media only screen and (max-width: 735px) {
    padding: 0px 5px;
  }
`;

const ImageWrap = styled.div`
  padding: 3px;
  border-radius: 1000px;
  border: 1px solid hsl(0, 0%, 86%);
`;
const Image = styled.img`
  border-radius: 1000px;
  width: 77px;
  height: 77px;
  display: block;
  @media only screen and (max-width: 735px) {
    width: 56px;
    height: 56px;
  }
`;
const Title = styled.div`
  padding-top: 15px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (max-width: 735px) {
    font-size: 12px;
    padding-top: 8px;
    font-weight: 400;
    width: 65px;
  }
`;
const NextButton = styled.button`
  all: unset;
  position: sticky;
  right: 0;
  cursor: pointer;
`;

export function Story() {
  return (
    <Stories>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-1.jpg" />
        </ImageWrap>
        <Title>IDPWD</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-2.jpg" />
        </ImageWrap>
        <Title>🎈🧪</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-3.jpg" />
        </ImageWrap>
        <Title>Diwali</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-4.jpg" />
        </ImageWrap>
        <Title>Masked</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-5.jpg" />
        </ImageWrap>
        <Title>Dark Universe</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-6.jpg" />
        </ImageWrap>
        <Title>📱12 Pro 🎥 Test</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-7.jpg" />
        </ImageWrap>
        <Title>Shot and Edited</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-8.jpg" />
        </ImageWrap>
        <Title>Vertical Cinema</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-9.jpg" />
        </ImageWrap>
        <Title>Hermitage 🎨</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-10.jpg" />
        </ImageWrap>
        <Title>🐌💗</Title>
      </StoryItem>
      <StoryItem>
        <ImageWrap>
          <Image src="/images/story-11.jpg" />
        </ImageWrap>
        <Title>💧+💡</Title>
      </StoryItem>
      <NextButton>
        <DesktopOnly>
          <div className="arrow-right-icon"></div>
        </DesktopOnly>
      </NextButton>
    </Stories>
  );
}
