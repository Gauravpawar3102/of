import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greet from './Pages/Greet';
import { useState } from 'react';
import Home from './Pages/Home';
import { GreetContext } from './contexts/GreetContext';
import Meals from './Pages/Meals';
function App() {
  const [name, setName] = useState('');
  return (
    <div className="App-container bg-blue-400  h-full">
      <GreetContext.Provider value={{ name, setName }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/greet" element={<Greet />} />
            <Route path="/meals/:id" element={<Meals />} />
          </Routes>
        </Router>
      </GreetContext.Provider>
    </div>
  );
}

export default App;
