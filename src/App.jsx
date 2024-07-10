import { useState } from "react";

export default function App() {
  const [recipeFormShown, setRecipeFormShown] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleSubmitRecipe = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { recipeName, recipeInstructions } = Object.fromEntries(formData);

    e.target.reset();

    setRecipes((prevRecipes) => [
      ...prevRecipes,
      { name: recipeName, instructions: recipeInstructions },
    ]);
    setRecipeFormShown(false);
  };

  return (
    <div className="app">
      <h1 className="app-header">My Recipes</h1>
      {recipes.length === 0 ? (
        <p>There are no recipes to list.</p>
      ) : (
        <section>
          {recipes.map((recipe, index) => (
            <article key={`${recipe.name}-${index}`}>
              <h2>{recipe.name}</h2>
              <p>{recipe.instructions}</p>
            </article>
          ))}
        </section>
      )}

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

          <button type="submit">Save Recipe</button>
        </form>
      ) : (
        <button onClick={() => setRecipeFormShown(true)}>Add Recipe</button>
      )}
    </div>
  );
}
