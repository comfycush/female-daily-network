export const scoreToStar = (i, score) => {
  if (Number(score) - i >= 1) {
    return <i className="fas fa-star" key={i}></i>;
  } else if (Number(score) - i > 0) {
    return <i className="fas fa-star-half-alt" key={i}></i>;
  } else {
    return <i className="far fa-star" key={i}></i>;
  }
};

export const calculateTotalDots = (totalItems, slidesToShow) => {
  return Math.floor(totalItems / slidesToShow) + (totalItems % slidesToShow);
};
