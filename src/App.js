/* eslint-disable no-unused-vars */
import styles from './App.module.css';
import Home from './pages/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
