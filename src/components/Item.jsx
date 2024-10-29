import styles from "./item.module.css";

const Item = ({ foodItem, bought, handleBuyButtonClicked }) => {
  // moving handleBuyButtonClicked to its parent component FoodItem;
  // const handleBuyButtonClicked = (event) => {
  //   console.log(`${foodItem} is being bought now`);
  //   console.log(event);
  // };
  return (
    <li
      className={`${styles["kg-item"]} list-group-item  ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // you can declare inline function on onClick event listener
        onClick={handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
