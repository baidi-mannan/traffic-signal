
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [currentLight, setCurrentLight] = useState(0);
  let timeOuts = [3000, 2000, 3000];
  let nextTime = [1, 2, 0]
  useEffect(() => {
    setTimeout(() => {
      setCurrentLight((currentLight+1)%3);
    }, timeOuts[currentLight]);
  }, [currentLight]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "108px", flexDirection: "column" }} className="App">
      {/* {currentLight} */}
      <div className="trafficContainer">
        <div className={currentLight === 0 ? "red" : "active"}></div>
        <div className={currentLight === 1 ? 'yellow' : "active"}></div>
        <div className={currentLight === 2 ? 'green' : 'active'}></div>
      </div>
      <div className='stick'>

      </div>


    </div>
  );
}

export default App;
