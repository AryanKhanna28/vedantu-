import React from 'react';
import MyTableComponent from './component/MyTableComponent.jsx'; // Assuming the component file is named MyTableComponent.js
import Data from './utils/data.json'

const App = () => {
  // console.log(Data);
  return (
  
    <div>
      <h1>My Table</h1>
      <MyTableComponent data={Data} />
    </div>
  );
};

export default App;
