import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button onClick={onClick} className={className} style={style}>
      <i class="fas fa-chevron-right"></i>
    </button>
  );
};

export default NextArrow;
