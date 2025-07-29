import { useState } from "react";
import Homepage from "./pages/homepage/Homepage.jsx"
function App() {
  const [count, setCount] = useState(0);

  return (
    // <!-- Main App Container -->
    
    <Homepage/>
  );
}

export default App;
