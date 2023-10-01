function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function RecipeList(props) {
  const Recipes = props.recipes.map((recipe) => {
    return (
      <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Recipes</h1>
      {Recipes}
    </div>
  );
}

function Button({
  text = "Click Me!",
  backColor = "white",
  handleClick = () => {
    return undefined;
  },
  url,
}) {
  const buttonStyle = {
    border: "none",
    padding: "10px",
    color: "black",
    backgroundColor: backColor,
  };
  return (
    <button style={buttonStyle} onClick={() => handleClick(url)}>
      {text}
    </button>
  );
}

// Button.defaultProps = {
//   text: "Click Me!",
//   backColor: "white",
// };

function Examples() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  const recipes = [
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: [
        "pizza crust",
        "pizza sauce",
        "mozzarella",
        "ham",
        "pineapple",
      ],
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: [
        "chickpeas",
        "olive oil",
        "garlic cloves",
        "lemon",
        "tahini",
      ],
    },
  ];

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
      <RecipeList recipes={recipes} />
      <Button />
      <Button
        text="Google!"
        backColor="gray"
        handleClick={handleButtonClick}
        url="https://www.google.com/"
      />
      <Button backColor="blue" />
    </div>
  );
}

export default Examples;
