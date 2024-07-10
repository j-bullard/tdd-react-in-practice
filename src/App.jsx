import { useState } from "react";

export default function App() {
  const [recipeFormShown, setRecipeFormShown] = useState(false);

  const handleSubmitRecipe = (e) => {};

  return (
    <div className="app">
      <h1 className="app-header">My Recipes</h1>
      <p>There are no recipes to list.</p>
      {recipeFormShown ? (
        <form id="recipe-form" name="recipe-form" onSubmit={handleSubmitRecipe}>
          <div>
            <label htmlFor="recipeName">Recipe Name:</label>
            <input type="text" name="recipeName" id="recipeName" />
          </div>

          <div>
            <label htmlFor="recipeInstructions">Recipe Instructions: </label>
            <textarea
              name="recipeInstructions"
              id="recipeInstructions"
            ></textarea>
          </div>
        </form>
      ) : (
        <button onClick={() => setRecipeFormShown(true)}>Add Recipe</button>
      )}
    </div>
  );
}
