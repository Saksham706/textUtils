import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      });

      // Auto dismiss alert after 2 seconds
      setTimeout(() => {
        setAlert(null);
      }, 5000);
  };

  const toggleMode = () => {
    if (mode === 'light' || mode === 'green') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  const toggleGreenMode = () => {
    if (mode !== 'green') {
      setMode('green');
      document.body.style.backgroundColor = '#0b6623';
      showAlert("Green mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          <Route exact path="/about" element={<About mode = {mode} />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
