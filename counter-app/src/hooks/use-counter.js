import { useState, useEffect } from "react";

const useCounter = (counterUpdateFn) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => counterUpdateFn(prevCounter));
      }, 1000);
  
      return () => clearInterval(interval);
    }, [counterUpdateFn]);

    return counter;
};

export default useCounter;