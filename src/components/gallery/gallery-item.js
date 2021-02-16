import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;
const Icon = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export function GalleryItem({ imagePath, icon }) {
  return (
    <Wrap>
      <Img alt="gallery-post" src={imagePath} />
      <Icon>
        {icon}
        {/* <span className="media-icon"></span> */}
      </Icon>
    </Wrap>
  );
}
