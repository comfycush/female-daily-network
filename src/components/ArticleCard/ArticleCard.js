import styled from "@emotion/styled";
import React from "react";

const ImgWrapper = styled.a`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  margin-bottom: 25px;
  border-radius: 10px;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const ArticleTitle = styled.a`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ArticleInfo = styled.div`
  display: flex;
`;
const ArticleCreator = styled.p`
  font-size: 16px;
`;
const ArticleInfoDivider = styled.div`
  color: rgba(0, 0, 0, 0.8);
  margin: 0 5px;
`;
const ArticleCreatedDate = styled.p`
  color: rgba(0, 0, 0, 0.8);
`;

const ArticleCard = ({ image, author, published_at, title }) => {
  return (
    <div>
      <ImgWrapper>
        <Image src={image} alt="article-image" />
      </ImgWrapper>

      <ArticleTitle>{title}</ArticleTitle>

      <ArticleInfo>
        <ArticleCreator>{author}</ArticleCreator>
        <ArticleInfoDivider>|</ArticleInfoDivider>
        <ArticleCreatedDate>{published_at}</ArticleCreatedDate>
      </ArticleInfo>
    </div>
  );
};

export default ArticleCard;
