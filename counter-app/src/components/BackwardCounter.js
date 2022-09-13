import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter((value) => value - 1);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
