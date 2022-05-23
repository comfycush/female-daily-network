import styled from "@emotion/styled";
import React from "react";
import { calculateTotalDots } from "../../utils/utils";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .disabled {
    color: #f4bec9;
  }

  .active {
    color: #da254e;
  }
`;
const Button = styled.button`
  color: #f4bec9;
`;
const Dots = styled.ul`
  list-style-type: none;
  margin: 0 20px;
  padding: 0;
  overflow: hidden;
  

  li {
    float: left;
    margin: 10px 10px;
  }

  li> button
`;

const CarouselControl = ({
  handleOnClickLeft,
  handleOnClickRight,
  slidesToShow = 0,
  totalItems = 0,
  handleOnClickDot,
  currentSlide,
  ...props
}) => {
  // console.log("currentSlide", currentSlide);
  return (
    <Wrapper>
      <Button
        onClick={handleOnClickLeft}
        className={currentSlide === 0 ? "disabled" : "active"}
      >
        <i className="fas fa-chevron-left"></i>
      </Button>
      <Dots>
        {[...Array(calculateTotalDots(totalItems, slidesToShow))].map(
          (_, i) => (
            <li key={i}>
              <button
                className={
                  i === currentSlide / slidesToShow ? "active" : "disabled"
                }
                onClick={() => handleOnClickDot(i * slidesToShow)}
              >
                <i className="fas fa-circle fa-sm"></i>
              </button>
            </li>
          )
        )}
      </Dots>
      <Button
        onClick={handleOnClickRight}
        className={currentSlide === totalItems - 1 ? "disabled" : "active"}
      >
        <i className="fas fa-chevron-right"></i>
      </Button>
    </Wrapper>
  );
};

export default CarouselControl;
