import { render, screen, cleanup } from "@testing-library/react";
import ReviewCard from "../ReviewCard";

const review = {
  user: "atikaxr",
  profile: ["Oily", "Medium Dark", "Warm", "19 - 24"],
  product: {
    image:
      "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
    name: "Tony Moly",
    desc: "Delight Tony Tint",
  },
  star: 3,
  comment:
    "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi",
};

afterEach(() => {
  cleanup();
});

describe("ReviewCard Component", () => {
  test("should render ReviewCard component", () => {
    render(
      <ReviewCard
        comment={review.comment}
        productDesc={review.product.desc}
        productName={review.product.name}
        productImage={review.product.image}
        profile={review.profile}
        star={review.star}
        user={review.user}
      />
    );
    const reviewCardElement = screen.getByTestId("review-card");
    expect(reviewCardElement).toBeInTheDocument();
  });

  test("should render comment correctly", () => {
    render(
      <ReviewCard
        comment={review.comment}
        productDesc={review.product.desc}
        productName={review.product.name}
        productImage={review.product.image}
        profile={review.profile}
        star={review.star}
        user={review.user}
      />
    );
    const reviewCardElement = screen.getByTestId("comment");
    expect(reviewCardElement).toHaveTextContent(
      "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi"
    );
  });

  test("should render product description correctly", () => {
    render(
      <ReviewCard
        comment={review.comment}
        productDesc={review.product.desc}
        productName={review.product.name}
        productImage={review.product.image}
        profile={review.profile}
        star={review.star}
        user={review.user}
      />
    );
    const reviewCardElement = screen.getByTestId("product-desc");
    expect(reviewCardElement).toHaveTextContent("Delight Tony Tint");
  });

  test("should render product name correctly", () => {
    <ReviewCard
      comment={review.comment}
      productDesc={review.product.desc}
      productName={review.product.name}
      productImage={review.product.image}
      profile={review.profile}
      star={review.star}
      user={review.user}
    />;
    const reviewCardElement = screen.getByTestId("product-name");
    expect(reviewCardElement).toHaveTextContent("Tony Moly");
  });

  test("should render product image correctly", () => {
    <ReviewCard
      comment={review.comment}
      productDesc={review.product.desc}
      productName={review.product.name}
      productImage={review.product.image}
      profile={review.profile}
      star={review.star}
      user={review.user}
    />;
    const reviewCardElement = screen.getByAltText("product");
    expect(reviewCardElement).toHaveAttribute(
      "src",
      "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg"
    );
  });

  test("should render profile correctly", () => {
    <ReviewCard
      comment={review.comment}
      productDesc={review.product.desc}
      productName={review.product.name}
      productImage={review.product.image}
      profile={review.profile}
      star={review.star}
      user={review.user}
    />;
    const reviewCardElement = screen.getByTestId("profile");
    expect(reviewCardElement).toHaveTextContent(
      ["Oily", "Medium Dark", "Warm", "19 - 24"].join(", ")
    );
  });

  test("should render user correctly", () => {
    <ReviewCard
      comment={review.comment}
      productDesc={review.product.desc}
      productName={review.product.name}
      productImage={review.product.image}
      profile={review.profile}
      star={review.star}
      user={review.user}
    />;
    const reviewCardElement = screen.getByTestId("user");
    expect(reviewCardElement).toHaveTextContent("atikaxr");
  });
});
