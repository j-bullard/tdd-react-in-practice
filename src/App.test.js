import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("contains an add recipe button", async () => {
  // 1. render the landing page
  render(<App />);

  // 2. wait for the page to load (implied)
  // 3. should see a button on the page that says "Add Recipe"
  let button = screen.getByRole("button", { name: "Add Recipe" });
  expect(button).toBeInTheDocument();

  // 4. the Add Recipe button should be below the heading that reads "My Recipes"
  let recipeHeader = screen.getByText("My Recipes");
  expect(recipeHeader.compareDocumentPosition(button)).toBe(4);

  // Click the button
  userEvent.click(button);

  // wait for the form to appear on the screen (override the default of 1000ms as an example)
  let form = await screen.findByRole("form", undefined, { timeout: 3000 });
  expect(form).toBeInTheDocument();

  // then i should see a form with fields: "Recipe Name" and "Recipe Instructions"
  expect(
    screen.getByRole("textbox", { name: /Recipe Name/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("textbox", { name: /Recipe Instructions/i })
  ).toBeInTheDocument();

  // and the "Add Recipe" button should no longer be on the screen
  // use queryBy instead of getBy because getBy throws an error when it doesn't have exactly 1 match
  button = screen.queryByRole("button", { name: "Add Recipe" });
  expect(button).toBeNull();
});
