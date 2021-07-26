import React, { useState } from "react";

import styles from "./AddUser.module.css";
import SubmitButton from "../UI/SubmitButton";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  let updatedList = [];

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    updatedList.push({ username: username, age: age });
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
            className={styles.input}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageHandler}
            className={styles.input}
          ></input>
          <SubmitButton type="submit">Add User</SubmitButton>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
