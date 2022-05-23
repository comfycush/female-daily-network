import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  margin-bottom: 30px;
`;
const HeaderTitle = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 24px;
`;
const HeaderSubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Subtitle = styled.div`
  font-size: 20px;
`;

const PreFooter = () => {
  return (
    <Container>
      <HeaderTitle>
        Female Daily - Find everything you want to know about beauty on Femaly
        Daily
      </HeaderTitle>
      <HeaderSubtitleWrapper>
        <Subtitle>
          <p>
            Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
            Tutorial, Discussions, Beauty Workshops, anything!
          </p>
          <p>
            We are here to be your friendly solution to all things beauty,
            inside and out!
          </p>
        </Subtitle>
      </HeaderSubtitleWrapper>
    </Container>
  );
};

export default PreFooter;
