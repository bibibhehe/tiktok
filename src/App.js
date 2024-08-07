// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
//import { useEffect } from 'react';
import Content from "./Content";

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  const [mounted, setMounted] = useState(false);
  return (
    <>
    <Content />
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>
    
  );
}

export default App;
function ItemList() {}
