import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreetings } from "../../redux/slices/greetingSlice";

const Greeting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGreetings());
  }, [])

  const greetings = useSelector((state) => state.greetings.greetings);
  const { greeting } = greetings;

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
};

export default Greeting;