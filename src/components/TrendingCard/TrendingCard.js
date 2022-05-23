import styled from "@emotion/styled";
import React from "react";
import image from "../../assets/images/editor-choice/product.png";
import { scoreToStar } from "../../utils/utils";

const Card = styled.div`
  height: auto;
  float: left;
  width: 100%;
  padding: 0 10px 0px 10px;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Img = styled.img`
  height: 175px;
  margin-bottom: 15px;
  min-width: 100%;
`;
const ScoreContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-around;
`;
const Score = styled.p`
  font-weight: bold;
  margin-right: 8px;
`;
const ScoreStars = styled.div`
  display: flex;
  color: #da254e;
  margin-right: 8px;
`;
const ReviewerCount = styled.p`
  font-weight: bold;
`;
const Detail = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 10px;
`;
const Brand = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
`;
const Name = styled.p`
  width: 150px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Color = styled.p`
  color: rgba(0, 0, 0, 0.5);
  width: 150px;
`;

const TrendingCard = ({ score }) => {
  return (
    <Card>
      <CardBody>
        <Img src={image} alt="product-image" />
        <ScoreContainer>
          <Score>4.9</Score>
          <ScoreStars>
            {[...Array(5)].map((_, i) => {
              return scoreToStar(i, score);
            })}
          </ScoreStars>
          <ReviewerCount>{"7"}</ReviewerCount>
        </ScoreContainer>
        <Detail>
          <Brand>Val by Valerie Thomas</Brand>
          <Name>Phyto-Pigments Flawless Serum Foundation</Name>
          <Color>Rosy Beige</Color>
        </Detail>
      </CardBody>
    </Card>
  );
};

export default TrendingCard;
