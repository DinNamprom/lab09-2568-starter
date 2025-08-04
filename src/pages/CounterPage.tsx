import { useState } from "react";
export default function CounterPage() {
  const [click , setClick] = useState(0);
  function Click() {
    setClick(click+1);
  }
  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      {/* Result Text */}
      <p>Counter: {click}</p>
      <button onClick={Click}>Increase</button>
    </div>
  );
}
