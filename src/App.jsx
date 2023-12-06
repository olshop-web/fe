import { useState, useRef } from "react";
// import "./App.css";
import HeaderHome from "./components/header/home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <HeaderHome/>
    </>
  );
}

export default App;
