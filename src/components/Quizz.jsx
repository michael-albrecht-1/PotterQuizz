import React from "react";

function Quizz(props) {
  const { apiData } = props;

  if (!apiData || apiData.length === 0)
    return <div className="card-body">Loading !</div>;

  const question = generateQuestion(apiData);

  return (
    <div>
      <div className="card-body">
        <div className="card-text">{question.question}</div>
        <div className="card-text">{question.answer}</div>
      </div>
      <div className="alert alert-primary"> {JSON.stringify(apiData)}</div>
    </div>
  );
}

export default Quizz;

function generateQuestion(apiData) {
  let id = null;
  let rollId = null;
  let selectedQuestion = {};
  const roll = Math.floor(Math.random() * Math.floor(3));
  let continueWhile = true;

  while (continueWhile) {
    rollId = Math.floor(Math.random() * apiData.length);
    id = apiData[rollId];
    switch (roll) {
      case 0:
        if (!id.role || id.role === null) {
          break;
        }
        selectedQuestion.question = "What is " + id.name + " role ?";
        selectedQuestion.answer = "Answer : " + id.role;
        continueWhile = false;
        break;

      case 1:
        if (!id.patronus || id.patronus === null) {
          break;
        }
        selectedQuestion.question = "What is " + id.name + " patronus ?";
        selectedQuestion.answer = "Answer : " + id.patronus;
        continueWhile = false;
        break;

      case 2:
        if (!id.house || id.house === null) {
          break;
        }
        selectedQuestion.question = "What is " + id.name + " house ?";
        selectedQuestion.answer = "Answer : " + id.house;
        continueWhile = false;
        break;

      default:
        break;
    }
  }
  return selectedQuestion;
}
