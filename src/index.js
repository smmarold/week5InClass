import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { UseStateDemo } from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<UseStateDemo />} />
            <Route path="state-demo" element={<UseStateDemo />} />
            <Route path="effect-demo" element={<UseEffectDemo />}>
               <Route path=":startingCount" element={<UseEffectDemo />} />
            </Route>
            <Route path="*" element={<p>Route Not Found</p>} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
