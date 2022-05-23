import styled from "@emotion/styled";
import React from "react";

const Button = styled.button`
  display: grid;
`;

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button onClick={onClick} className={className} style={style}>
      <i class="fas fa-chevron-left"></i>
    </Button>
  );
};

export default PrevArrow;
