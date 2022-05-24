import { render, screen, cleanup } from "@testing-library/react";
import EditorChoiceCard from "../EditorChoiceCard";

const editorChoice = {
  editor: "annedean",
  role: "Associate Editor",
  product: {
    name: "Y.O.U Makeups",
    rating: "4.1",
    description: "Rouge Velvet Matte Lip Cream",
    image:
      "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
  },
};

afterEach(() => {
  cleanup();
});

describe("EditorChoiceCard Component", () => {
  test("should render EditorChoiceCard component", () => {
    render(
      <EditorChoiceCard
        name={editorChoice.editor}
        role={editorChoice.role}
        productImage={editorChoice.product.image}
        description={editorChoice.product.description}
        productName={editorChoice.product.name}
        score={editorChoice.product.rating}
      />
    );
    const editorChoiceCardElement = screen.getByTestId("editor-choice-card");
    expect(editorChoiceCardElement).toBeInTheDocument();
  });

  test("should render editor name correctly", () => {
    render(
      <EditorChoiceCard
        name={editorChoice.editor}
        role={editorChoice.role}
        productImage={editorChoice.product.image}
        description={editorChoice.product.description}
        productName={editorChoice.product.name}
        score={editorChoice.product.rating}
      />
    );
    const editorChoiceCardElement = screen.getByTestId("editor-name");
    expect(editorChoiceCardElement.textContent).toBe("annedean");
  });

  test("should render editor role correctly", () => {
    render(
      <EditorChoiceCard
        name={editorChoice.editor}
        role={editorChoice.role}
        productImage={editorChoice.product.image}
        description={editorChoice.product.description}
        productName={editorChoice.product.name}
        score={editorChoice.product.rating}
      />
    );
    const editorChoiceCardElement = screen.getByTestId("editor-role");
    expect(editorChoiceCardElement).toHaveTextContent("Associate Editor");
  });

  test("should render product image", () => {
    render(
      <EditorChoiceCard
        name={editorChoice.editor}
        role={editorChoice.role}
        productImage={editorChoice.product.image}
        description={editorChoice.product.description}
        productName={editorChoice.product.name}
        score={editorChoice.product.rating}
      />
    );
    const imageElement = screen.getByAltText("product");
    expect(imageElement).toHaveAttribute(
      "src",
      "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"
    );
  });

  test("should render product score correctly", () => {
    render(
      <EditorChoiceCard
        name={editorChoice.editor}
        role={editorChoice.role}
        productImage={editorChoice.product.image}
        description={editorChoice.product.description}
        score={editorChoice.product.rating}
        productName={editorChoice.product.name}
      />
    );
    const editorChoiceCardElement = screen.getByTestId("product-score");
    expect(editorChoiceCardElement).toHaveTextContent("4.1");
  });

  test("should render product name correctly", () => {
    render(
      <EditorChoiceCard
        name={editorChoice.editor}
        role={editorChoice.role}
        productImage={editorChoice.product.image}
        description={editorChoice.product.description}
        productName={editorChoice.product.name}
        score={editorChoice.product.rating}
      />
    );
    const editorChoiceCardElement = screen.getByTestId("product-name");
    expect(editorChoiceCardElement).toHaveTextContent("Y.O.U Makeups");
  });

  test("should render product description correctly", () => {
    render(
      <EditorChoiceCard
        name={editorChoice.editor}
        role={editorChoice.role}
        productImage={editorChoice.product.image}
        description={editorChoice.product.description}
        productName={editorChoice.product.name}
        score={editorChoice.product.rating}
      />
    );
    const editorChoiceCardElement = screen.getByTestId("product-description");
    expect(editorChoiceCardElement).toHaveTextContent(
      "Rouge Velvet Matte Lip Cream"
    );
  });
});
