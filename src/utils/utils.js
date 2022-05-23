export function scoreToStar(i, score) {
  if (Number(score) - i > 1) {
    return <i className="fas fa-star" key={i}></i>;
  } else if (Number(score) - i > 0.5) {
    return <i className="fas fa-star-half-alt" key={i}></i>;
  } else {
    return <i className="far fa-star" key={i}></i>;
  }
}
