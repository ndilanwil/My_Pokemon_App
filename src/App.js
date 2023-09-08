import './App.css';
import Topbar from './Components/Header/Header.js'
import Body from './Components/Body/Body.js'
import React, { lazy, Suspense } from 'react';
const Test = lazy(() => import('./Components/Body/Body.js'));

function App() {
  return (
    <div className="App">
      <Topbar />
      <br></br>
      <Suspense fallback={<div>Loading...</div>}>
          <Test/>
      </Suspense>
    </div>
  );
}

export default App;
