// This component is a container for food items list . This container can be used multiple times to show different kind of data .
import styles from "./Container.module.css";
const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
export default Container;
