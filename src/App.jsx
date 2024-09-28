import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { questions as initialQuestions, answers as initialAnswers } from './DSAcards';

import './App.css';

const App = () => {
  const [flashcards, setFlashcards] = useState(
    initialQuestions.map((question, index) => ({
      question,
      answer: initialAnswers[index],
    }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [studiedCount, setStudiedCount] = useState(0);


  const handleDoneStudying = () => {
    setIsFlipped(false);
    if (flashcards.length > 1) {
      setStudiedCount((prevCount) => prevCount + 1);
      setFlashcards((prevFlashcards) => prevFlashcards.filter((_, index) => index !== currentIndex));
      setCurrentIndex((prevIndex) => prevIndex % (flashcards.length - 1));
    } 
    else {
      setStudiedCount((prevCount) => prevCount + 1);
      setFlashcards([]);
      setCurrentIndex(0);
      setShowConfetti(true);
    }
  };

  const handleUnsure = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handleNextRandom = () => {
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * flashcards.length));
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const remainingCount = flashcards.length;

  if (flashcards.length === 0) {
    return (
      <div className="App">
        {showConfetti && <Confetti />}
        <h1>Flashcards for Data Structures & Algorithms</h1>
        <p>Congratulations! You have finished all the flashcards.</p>
      </div>
    );
  }

  return (
    <div className="App">
      {showConfetti && <Confetti />}
      <h1>Flashcards for Data Structures & Algorithms</h1>
      <div className="counter">
        <p>Studied: {studiedCount} / Remaining: {remainingCount}</p>
      </div>
      <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
        <div className={`flashcard__inner ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="flashcard__front">
            {flashcards[currentIndex].question}
          </div>
          <div className="flashcard__back">
            {flashcards[currentIndex].answer}
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleDoneStudying} className="button">
          👏
        </button>
        <button onClick={handleNextRandom} className="button">
          ⏭️
        </button>
        <button onClick={handleUnsure} className="button">
          😐
        </button>
      </div>
    </div>
  );
};

export default App;