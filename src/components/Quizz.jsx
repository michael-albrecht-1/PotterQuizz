import React from "react";

function Quizz(props) {
  const { apiData } = props;
  //if (apiData.length !== 0) {
  return (
    <div className="alert alert-success">
      apiData : {JSON.stringify(apiData)}
    </div>
  );
  //}
}

export default Quizz;
