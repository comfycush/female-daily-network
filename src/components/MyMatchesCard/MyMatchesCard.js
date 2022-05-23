import styled from "@emotion/styled";
import React from "react";
import productImg from "../../assets/images/editor-choice/product.png";
import {
  ProductDetail,
  ProductDetailBrand,
  ProductDetailColor,
  ProductDetailName,
  Score,
  ScoreContainer,
  ScoreStars,
} from "../../styled/shared/styles";

const Card = styled.div`
  display: flex;
  flex-flow: column;
`;
const CardBody = styled.a`
  flex: auto;
  border-radius: 15px;
  height: auto;
  padding: 15px;
  font-size: 16px;
  background-color: #fff;
`;
const ImgWrapper = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const SkinTypeText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #da254e;
  margin-bottom: 10px;
`;

const MyMatchesCard = () => {
  return (
    <Card>
      <CardBody>
        <ImgWrapper>
          <img src={productImg} alt="product" />
        </ImgWrapper>
        <SkinTypeText>Match Skin Type</SkinTypeText>
        <ScoreContainer>
          <Score>4.9</Score>
          <ScoreStars>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </ScoreStars>
          <p>{"(7)"}</p>
        </ScoreContainer>
        <ProductDetail>
          <ProductDetailBrand>Val by Valerie Thomas</ProductDetailBrand>
          <ProductDetailName>
            <p>Phyto-Pigments Flawless Serum Foundation</p>
          </ProductDetailName>
          <ProductDetailColor>
            <p>Rosy Beige</p>
          </ProductDetailColor>
        </ProductDetail>
      </CardBody>
    </Card>
  );
};

export default MyMatchesCard;
