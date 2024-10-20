import Item from "./Item";
// This component is acting a parent component for item
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {/* here map function is is calling a callback function on each element of an array and returning single item component that is passing data into Item component as a prob */}
      {items.map((item) => {
        return <Item key={item} foodItem={item}></Item>;
      })}
    </ul>
  );
};
export default FoodItems;
