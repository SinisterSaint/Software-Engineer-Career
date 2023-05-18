import React, { useState } from 'react';
import Form from './form';
import Story from './story'
import logo from './logo.svg';
import './App.css';

function App() {
  const [words, setWords] = useState({});
  const [revealStory, setStory] = useState(false);

  const handleFormSubmit = (submittedWords) => {
    setWords(submittedWords);
    setStory(true);
  };

  return (
    <div>
      <h1>Welcome to the Madlibs Game</h1>
      {revealStory ? (
        <Story words={words} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );

}

export default App;
