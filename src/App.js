import { UseStateDemo } from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import './App.css';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleShowUseStateDemo = () => {
    navigate('state-demo');
  };

  const handleShowUseEffectDemo = () => {
    navigate('effect-demo');
  };

  return (
    <div className="App">

      <button onClick={() => handleShowUseStateDemo()} className="button">
        UseState Demo
      </button>
      <button onClick={() => handleShowUseEffectDemo()} className="button">
        UseEffect Demo
      </button>
      <Outlet />
      <hr />
    </div>
  );
}

export default App;
