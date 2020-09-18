import React, { useState, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import LoadApp from "./components/LoadApp";
import Quizz from "./components/Quizz";

function App() {
  const LoadQuizz = LoadApp(Quizz);

  const [appState, setAppState] = useState({ loaded: false, apiData: null });

  useEffect(() => {
    setAppState({ loaded: true });
    const key = "$2a$10$e2mGSxwidkzAXTFnktuRwu1/XQRbcTzhFSDgOyZO.DOwbhZqoQtMq";
    const apiUrl = "https://www.potterapi.com/v1/characters?key=" + key;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setAppState({ loaded: true, apiData: data });
      });
  }, [setAppState]);

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">Harry Potter Quizz</div>
        <LoadQuizz loading={appState.loaded} apiData={appState.apiData} />
      </div>
    </div>
  );
}

export default App;
