import styled from "@emotion/styled";
import React from "react";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const Img = styled.img`
  height: 170px;
  border-radius: 9999px;
  margin-bottom: 20px;
`;
const Name = styled.div`
  font-weight: 20px;
  font-weight: bold;
  margin-bottom: 40px;
`;
const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const Text = styled.div`
  text-align: center;
`;
const PopularGroupCard = ({ img, name, text }) => {
  return (
    <Card>
      <Img src={img} alt="popular group image" />
      <Name>{name}</Name>
      <IconWrapper>
        <i className="fas fa-user">-</i>
        <i className="fas fa-list">-</i>
        <i className="far fa-comment">-</i>
      </IconWrapper>
      <Text>{text}</Text>
    </Card>
  );
};

export default PopularGroupCard;
