import React, { useState } from 'react';
import Header from './component/Header.jsx';
import Home from './component/Home.jsx';
import Analysis from './component/Analysis.jsx';
import Data from './utils/data.json'
import Exams from './component/Exams.jsx';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <Header onButtonClick={handleButtonClick} />
      {activeComponent === 'home' && <Home />}
      {activeComponent === 'analysis' && <Analysis data={Data}/>}
      {activeComponent === 'exams' && <Exams/>}

    </div>
  );
}

export default App;

