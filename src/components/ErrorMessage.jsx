// This component shows a message if foodItems array is empty
// we have destructed props and pass the whole items object in ErrorMessage component.
const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>I am still hungry</h3>}</>;
};

export default ErrorMessage;
