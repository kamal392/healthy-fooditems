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

  let [textToShow, setTextState] = useState();
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
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      console.log("The new food Item Enter is " + newFoodItem);
    }
    // console.log(event);
    // setTextState(event.target.value);
  };

  return (
    // replaced react fragment with Container component
    <Container>
      <h1 className="kg-heading ">Healthy food</h1>
      {/* passing foodItems array into ErrorMessage and FoodItems component using props. Always catch the prop using left side like (items in this case) */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      {/* <FoodInput handleOnChange={handleOnChange}></FoodInput> */}
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
