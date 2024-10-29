import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  let foodItems = [
    "Granola",
    "Cornflakes",
    "Avocado Toast",
    "Grilled salmon",
    "Grilled Chicken",
    "Grilled Grouper",
  ];

  let [textToShow, setTextState] = useState();

  // function to handle onchange event each time user time something in the box.
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    // replaced react fragment with Container component
    <Container>
      <h1 className="kg-heading ">Healthy food</h1>
      {/* passing foodItems array into ErrorMessage and FoodItems component using props. Always catch the prop using left side like (items in this case) */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
