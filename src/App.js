import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import "./App.css";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
}

export default App;
