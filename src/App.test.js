import { render, screen } from "@testing-library/react";
import App from "./App";

test("As a Chef, I want to store my recipes so that I can keep track of them.", () => {
  // 1. Render the landing page
  render(<App />);

  // 2. wait for the page to load (implied)
  // 3. should see a heading that reads "My Recipes"
  let recipeHeader = screen.getByText("My Recipes");
  expect(recipeHeader).toBeInTheDocument();

  // 4. I should see text beneath the heading that reads "There are no recipes to list."
  let recipeList = screen.getByText("There are no recipes to list.");
  expect(recipeList).toBeInTheDocument();

  // 5. Recipe list should be below recipe header
  expect(recipeHeader.compareDocumentPosition(recipeList)).toBe(4);
});
