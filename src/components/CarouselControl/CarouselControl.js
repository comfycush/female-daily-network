import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f4bec9;
`;
const Button = styled.button`
  color: #f4bec9;
`;
const Dots = styled.ul`
  list-style-type: none;
  margin: 0 20px;
  padding: 0;
  overflow: hidden;

  .li {
    float: left;
    margin: 10px 10px;
  }
`;

const CarouselControl = ({ handleOnClickLeft, noOfItems, ...props }) => {
  return (
    <Wrapper>
      <Button onClick={handleOnClickLeft}>
        <i className="fas fa-chevron-left"></i>
      </Button>
      <Dots>
        {[...Array(noOfItems)].map((_, i) => {
          <></>;
        })}
      </Dots>
    </Wrapper>
  );
};

export default CarouselControl;
