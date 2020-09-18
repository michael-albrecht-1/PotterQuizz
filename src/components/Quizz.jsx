import React from "react";

function Quizz(props) {
  const { apiData } = props;

  if (apiData.length === 0)
    return <div className="card-body">Something wen wrong</div>;

  const rollId = Math.floor(Math.random() * apiData.length);

  return <div className="card-body">{rollId.name}</div>;
  //}
}

export default Quizz;
