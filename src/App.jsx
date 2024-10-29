import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let foodItems = [
  //   "Granola",
  //   "Cornflakes",
  //   "Avocado Toast",
  //   "Grilled salmon",
  //   "Grilled Chicken",
  //   "Grilled Grouper",
  // ];

  // let [textToShow, setTextState] = useState();
  // create a state for food array so that a user can add items to the food array.
  let [foodItems, setFoodItem] = useState([
    "Russian Salad",
    "Cob Salad",
    "Greek Salad",
  ]);

  // function to handle onchange event each time user time something in the box.
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  //   setTextState(event.target.value);
  // };
  //A function which is going to fire when a user hit enter after typing something in the input box.
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      // newFoodItem holds current value of input box
      let newFoodItem = event.target.value;
      // This is resetting value to an empty string after the press enter.
      event.target.value = "";
      // newItems is the new array that holds the old array elements and new element.
      let newItems = [...foodItems, newFoodItem];
      setFoodItem(newItems);
    }
  };

  return (
    // replaced react fragment with Container component
    <Container>
      <h1 className="kg-heading ">Healthy food</h1>
      {/* passing foodItems array into ErrorMessage and FoodItems component using props. Always catch the prop using left side like (items in this case) */}
      {/* <FoodInput handleOnChange={handleOnChange}></FoodInput> */}
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
