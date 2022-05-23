import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  margin-bottom: 30px;
`;
const SectionHeaderTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 24px;
`;
const SectionHeaderSubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SectionHeaderSubtitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
`;
const SeeMoreWrapper = styled.a`
  color: #da254e;
  display: flex;
  font-size: 20px;
`;
const SeeMoreText = styled.p`
  margin-right: 10px;
`;

const SectionHeader = ({ title, subtitle, isSeeMore = false }) => {
  return (
    <Container>
      <SectionHeaderTitle>
        <p>{title}</p>
      </SectionHeaderTitle>
      <SectionHeaderSubtitleWrapper>
        <SectionHeaderSubtitle>
          <p>{subtitle}</p>
        </SectionHeaderSubtitle>
        {isSeeMore && (
          <SeeMoreWrapper>
            <SeeMoreText>See More</SeeMoreText>
            <span>
              <i className="fas fa-chevron-right fa-xs"></i>
            </span>
          </SeeMoreWrapper>
        )}
      </SectionHeaderSubtitleWrapper>
    </Container>
  );
};

export default SectionHeader;
