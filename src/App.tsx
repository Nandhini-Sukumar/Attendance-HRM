import React from 'react';
import Header from './common/header';
import CheckIn from './components/checkIn-checkOut';



function App() {
  return (
    <>
      <div className="appContainer">
      <Header></Header> 
      <CheckIn></CheckIn>   
      </div>
    </>
  );
}

export default App;
