import React, { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    //Validate
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "invlid input",
        message: "Please enter valid name and age (non-empty value).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "invlid age",
        message: "Please enter a valid age (age>0).",
      });
      return;
    }
    props.onAddUser({
      name: enteredName,
      age: enteredUserAge,
      id: Math.random().toString(),
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
