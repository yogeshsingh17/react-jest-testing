import { useState } from "react";
import Button from "../src/components/Button";

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="m-5">
        <h1 className="font-semibold text-3xl flex justify-center">React App</h1>
        
        <p>Count: {count}</p>
        <Button 
          onClick={() => {setCount(count + 1)}}
        >
          Increment
        </Button>
      </div>
    </>
  )
}

export default App;