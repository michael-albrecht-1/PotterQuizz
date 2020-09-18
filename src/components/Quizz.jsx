import React from "react";

function Quizz(props) {
  const { apiData } = props;

  if (!apiData || apiData.length === 0)
    return <div className="card-body">Loading !</div>;

  const rollId = Math.floor(Math.random() * apiData.length);

  return (
    <div className="card-body">
      <div className="mb-5">
        What is the <strong>{apiData[rollId].name}</strong> Poudlard House ?
      </div>
      <div className="alert alert-primary"> {JSON.stringify(apiData)}</div>
    </div>
  );
}

export default Quizz;
