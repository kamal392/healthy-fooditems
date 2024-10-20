import styles from "./item.module.css";

const Item = (props) => {
  // destructuring
  let { foodItem } = props;
  return (
    <li className={`${styles["kg-item"]} `}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
};
export default Item;
