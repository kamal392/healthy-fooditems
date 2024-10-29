import { useState } from "react";
import Item from "./Item";
// This component is acting a parent component for item
const FoodItems = ({ items }) => {
  // use useState to store clicked items in an array.
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <>
            <Item
              key={item}
              foodItem={item}
              // passing function to item component which we execute when a user will click on buy button. that way child component item will talk back to foodItem component (parent)
              handleBuyButtonClicked={(event) => onBuyButton(item, event)}
              bought={activeItems.includes(item)}
            ></Item>
          </>
        );
      })}
    </ul>
  );
};
export default FoodItems;
