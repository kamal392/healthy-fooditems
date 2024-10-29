import Item from "./Item";
// This component is acting a parent component for item
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {/* here map function is is calling a callback function on each element of an array and returning single item component that is passing data into Item component as a prob */}
      {items.map((item) => {
        // here we have declared a an event handler for buy button .
        const handleBuyButtonClicked = () => {
          console.log(`${item} being bought`);
        };
        return (
          <>
            <Item
              key={item}
              foodItem={item}
              // passing function to item component which we execute when a user will click on buy button. that way child component item will talk back to foodItem component (parent)
              handleBuyButtonClicked={handleBuyButtonClicked}
            ></Item>
          </>
        );
      })}
    </ul>
  );
};
export default FoodItems;
