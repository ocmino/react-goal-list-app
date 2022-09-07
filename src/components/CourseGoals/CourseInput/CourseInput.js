import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../Card/Card";
import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;
  background-color: lightgray;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    text-align: center;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "#ffd7d7" : "white")};
    font: inherit;
    line-height: 1.5;
    padding: 0 0.25rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }
`;

const GoalsControl = styled.p`
  /* neon text center in a box with border radius */
  text-align: center;
  padding: 0.5rem;
  border-radius: 12px;
  margin: 2rem auto;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  font-style: italic;

  /* media query for mobile */
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <GoalsControl>Add your goals to keep track of them!</GoalsControl>
      <FormControl invalid={!isValid}>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
