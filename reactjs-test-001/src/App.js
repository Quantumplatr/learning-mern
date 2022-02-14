import logo from './logo.svg';
import MyNavbar from './components/MyNavbar.js'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './pages/Layout';
import Error404 from './pages/Error404';

function FillerHome() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  );
}

function FillerTest() {
  return (
    <div className="App">
      test
      <Link to="random">Link</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FillerHome />} />
          <Route path="test" element={<FillerTest />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
