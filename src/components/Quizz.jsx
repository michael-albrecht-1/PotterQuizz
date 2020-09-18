import React from "react";

function Quizz(props) {
  const { apiData } = props;

  if (!apiData || apiData.length === 0)
    return <div className="card-body">Loading !</div>;

  const rollId = Math.floor(Math.random() * apiData.length);
  const question = generateQuestion(apiData, rollId);

  return (
    <div>
      <div className="card-body">
        {question}
        <div>Answer : {apiData[rollId].house}</div>
      </div>
      <div className="alert alert-primary"> {JSON.stringify(apiData)}</div>
    </div>
  );
}

export default Quizz;

function generateQuestion(apiData, rollId) {
  const questionType = rollQuestionType(apiData);
  if (apiData[rollId].questionType === null) {
  }

  return (
    <div className="mb-5">
      What is the <strong>{apiData[rollId].name}</strong> Poudlard House ?
    </div>
  );
}

function rollQuestionType(apiData, rollId) {
  let selectedQuestionType = null;
  const roll = Math.floor(Math.random() * 7);
  switch (roll) {
    case value:
      1;
      selectedQuestionType = "role";
      break;

    default:
      break;
  }

  while (apiData[rollId] !== null) {}

  return "house";
}
