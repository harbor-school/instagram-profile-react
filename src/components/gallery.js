import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  @media only screen and (max-width: 735px) {
    gap: 3px;
  }
`;
const GalleryItem = styled.div`
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

export function Gallery() {
  return (
    <Grid>
      <GalleryItem>
        <Img alt="gallery-post" src="/images/gallery-1.jpg" />
        <Icon>
          <span className="media-icon"></span>
        </Icon>
      </GalleryItem>
      <GalleryItem>
        <Img alt="gallery-post" src="/images/gallery-2.jpg" />
        <Icon>
          <span className="media-icon"></span>
        </Icon>
      </GalleryItem>
      <GalleryItem>
        <Img alt="gallery-post" src="/images/gallery-3.jpg" />
        <Icon>
          <span className="media-icon"></span>
        </Icon>
      </GalleryItem>
      <GalleryItem>
        <Img alt="gallery-post" src="/images/gallery-4.jpg" />
      </GalleryItem>
      <GalleryItem>
        <Img alt="gallery-post" src="/images/gallery-5.jpg" />
      </GalleryItem>
      <GalleryItem>
        <Img alt="gallery-post" src="/images/gallery-6.jpg" />
        <Icon>
          <span className="media-icon"></span>
        </Icon>
      </GalleryItem>
    </Grid>
  );
}
