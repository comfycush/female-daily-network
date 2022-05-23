import styled from "@emotion/styled";
import React from "react";

const OuterWrapper = styled.div`
  overflow: hidden;
  margin-top: 0;

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    border: 0.125rem solid transparent;
  }

  &:nth-of-type(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  &:nth-of-type(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  &:nth-of-type(3) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  &:nth-last-of-type(-n + 1):first-of-type {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
`;
const InnerWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
`;

const VideoItem = ({ src }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <iframe src={src} allowFullScreen></iframe>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default VideoItem;
