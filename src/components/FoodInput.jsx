import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  // handleOnChange Function will execute each time a value inside the input box will change.
  // moved handleOnChange() to its parents component

  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Item Here!"
        className={styles.foodInput}
        onChange={handleOnChange}
      />
    </>
  );
};
export default FoodInput;
