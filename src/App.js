import "antd/dist/antd.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from "./components";
import {TestApp } from "./views";
import './App.css'
function App() {
 
  return (
    <div className="container">
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<TestApp />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
