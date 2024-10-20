import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let foodItems = [
    "Granola",
    "Cornflakes",
    "Avocado Toast",
    "Grilled salmon",
    "Grilled Chicken",
    "Grilled Grouper",
  ];
  // let foodItems = [];
  return (
    <>
      <h1 className="kg-heading ">Healthy food</h1>
      {/* passing foodItems array into ErrorMessage and FoodItems component using props. Always catch the prop using left side like (items in this case) */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
