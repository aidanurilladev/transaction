import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import AddTransaction from "./pages/AddTransaction";
import Navigation from "./components/Navigation";


function App() {
 
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTransaction />} />
      </Routes>
    </>
  );
}

export default App;
