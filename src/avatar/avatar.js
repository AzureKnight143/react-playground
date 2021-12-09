import React from "react";
import { Form } from "react-bootstrap";
import { GetRequest } from "./apiRequests";
import "./avatar.scss";

export default function Avatar() {
  return (
    <div className="avatar">
      <h2>Avatar</h2>
      <h3>Characters</h3>
      <div className="characters mb-4">
        <GetRequest endpoint="https://api.sampleapis.com/avatar/characters">
          <Character></Character>
        </GetRequest>
      </div>
      <h3>Quiz</h3>
      <GetRequest endpoint="https://api.sampleapis.com/avatar/questions">
        <Question></Question>
      </GetRequest>
    </div>
  );
}

function Character(props) {
  return props.items.map((character) => (
    <div className="character" key={character.id}>
      <h3>{character.name}</h3>
    </div>
  ));
}

function Question(props) {
  function handleClick(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) alert("Correct!");
    else alert("Wrong");
  }

  return props.items.map((question) => (
    <div className="question" key={question.id}>
      <p>{question.question}</p>
      {question.possibleAnsers.map((possibleAnswer) => (
        <Form.Check
          type="radio"
          id={possibleAnswer}
          label={possibleAnswer}
          name={question.id}
          onClick={() => handleClick(possibleAnswer, question.correctAnswer)}
        />
      ))}
    </div>
  ));
}
