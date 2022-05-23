import styled from "@emotion/styled";
import React from "react";
import avatar from "../../assets/images/avatars/1.jpg";
import { scoreToStar } from "../../utils/utils";

const Wrapper = styled.div`
  width: 340px;
  height: 348px;
`;
const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 240px;
  padding: 15px;
`;
const CardHeader = styled.div`
  display: flex;
  height: 85px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
`;
const Img = styled.img`
  height: 100%;
`;
const CardDetail = styled.div`
  margin-top: 15px;
  margin-left: 15px;
`;
const CardDetailBrand = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;
const CardDetailName = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`;
const CardBody = styled.div`
  margin-top: 10px;
`;
const ScoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const ScoreStars = styled.div`
  display: flex;
  color: #da254e;
  margin-right: 8px;
`;
const CreatedDate = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;
const Testimonial = styled.div`
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
const CardFooter = styled.div`
  position: relative;
  bottom: -25px;
  border-radius: 9999px;
  margin: 0 auto;
`;
const CardFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Avatar = styled.img`
  border-radius: 9999px;
  height: 60px;
  margin-bottom: 10px;
`;
const ReviewerName = styled.p`
  margin-bottom: 5px;
`;
const ReviewerDetail = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.8);
`;

const ReviewCard = ({
  comment,
  productDesc,
  productName,
  productImage,
  profile,
  star,
  user,
}) => {
  function checkTruncateTestimonial(text) {
    if (text.length > 150) {
      return `${text.substring(0, 150)}...`;
    } else {
      return text;
    }
  }
  return (
    <Wrapper>
      <Card>
        <CardHeader>
          <Img src={productImage} alt="product" />
          <CardDetail>
            <CardDetailBrand>{productName}</CardDetailBrand>
            <CardDetailName>{productDesc}</CardDetailName>
          </CardDetail>
        </CardHeader>
        <CardBody>
          <ScoreWrapper>
            <ScoreStars>
              {[...Array(5)].map((_, i) => {
                return scoreToStar(i, star);
              })}
            </ScoreStars>
            <CreatedDate>2 hours ago</CreatedDate>
          </ScoreWrapper>
          <Testimonial>{checkTruncateTestimonial(comment)}</Testimonial>
        </CardBody>
        <CardFooter>
          <CardFooterContainer>
            <Avatar src={avatar} alt="avatar" />
            <ReviewerName>{user}</ReviewerName>
            <ReviewerDetail>{profile.join(", ")}</ReviewerDetail>
          </CardFooterContainer>
        </CardFooter>
      </Card>
    </Wrapper>
  );
};

export default ReviewCard;
