import Card from "./Card";
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter((value) => value + 1);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
