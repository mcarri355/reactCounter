// App.jsx
import React, { useState, useEffect } from 'react';
import PageViewCounter from './components/PageViewCounter';
import './App.css'; // Import the CSS file

function App() {
  // State to track the view counter
  const [viewCounter, setViewCounter] = useState(0);

  // Function to get or set the view counter from localStorage
  function getOrSetViewCounter() {
    const storedCounter = localStorage.getItem('viewCounter');

    if (storedCounter) {
      setViewCounter(Number(storedCounter));
    } else {
      localStorage.setItem('viewCounter', 0);
      setViewCounter(0);
    }
  }

  // useEffect to initialize and update the view counter
  useEffect(() => {
    getOrSetViewCounter();
    
    // Increment the counter in localStorage
    localStorage.setItem('viewCounter', Number(localStorage.getItem('viewCounter')) + 1);
    
    // Update the viewCounter state
    setViewCounter(Number(localStorage.getItem('viewCounter')));
  }, []);

  return (
    <div className="App">
      <PageViewCounter viewCounter={viewCounter} />
    </div>
  );
}

export default App;
