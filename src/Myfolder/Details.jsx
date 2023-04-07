// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// import { useEffect, useState } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []); // <- add empty brackets here
  
//   return <h1>I've rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);

// export default Timer

import { useEffect, useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </div>
    );
  }
   
export default Counter