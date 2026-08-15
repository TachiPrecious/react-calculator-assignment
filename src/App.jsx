import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator.jsx";

function App() {
  return(
    <div className="min-h-screen bg-slate-100">
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>


    </div>
  )
}

export default App