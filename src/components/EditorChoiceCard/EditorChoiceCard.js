import styled from "@emotion/styled";
import React from "react";
import {
  ProductDetail,
  ProductDetailBrand,
  ProductDetailColor,
  ProductDetailName,
  Score,
  ScoreContainer,
  ScoreStars,
} from "../../styled/shared/styles";
import avatar from "../../assets/images/avatars/2.jpg";
import { scoreToStar } from "../../utils/utils";

const CardHeader = styled.div`
  display: flex;
  height: 2.5rem;
`;
const Avatar = styled.img`
  position: relative;
  height: 60px;
  border-radius: 9999px;
  bottom: 5px;
  left: 15px;
`;
const TextWrapper = styled.div`
  padding-left: 25px;
`;
const EditorName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 5px;
`;
const EditorRole = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
`;
const CardBody = styled.div`
  flex: auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  height: auto;
  padding: 30px 15px;
  font-size: 16px;
`;
const EditorChoiceImg = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const EditorChoiceCard = ({
  name,
  role,
  score,
  productImage,
  description,
  productName,
}) => {
  return (
    <div>
      <CardHeader>
        <Avatar alt="avatar" src={avatar} />
        <TextWrapper>
          <EditorName>{name}</EditorName>
          <EditorRole>{role}</EditorRole>
        </TextWrapper>
      </CardHeader>

      <CardBody>
        <EditorChoiceImg>
          <img src={productImage} alt="product" />
        </EditorChoiceImg>
        <ScoreContainer>
          <Score>{score}</Score>
          <ScoreStars>
            {[...Array(5)].map((_, i) => {
              return scoreToStar(i, score);
            })}
          </ScoreStars>
          <p>{"(7)"}</p>
        </ScoreContainer>
        <ProductDetail>
          <ProductDetailBrand>{productName}</ProductDetailBrand>
          <ProductDetailName>
            <p>{description}</p>
          </ProductDetailName>
          <ProductDetailColor>
            <p>Rosy Beige</p>
          </ProductDetailColor>
        </ProductDetail>
      </CardBody>
    </div>
  );
};

export default EditorChoiceCard;
