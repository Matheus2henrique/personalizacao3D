import { useState } from "react";
import Avatar from "./components/Avatar";
import ClothingPanel from "./components/ClothingPanel";
import "./App.css";

function App() {
  const [shirt, setShirt] = useState("polo");

  return (
    <div className="layout">
      <Avatar shirt={shirt} />

      <ClothingPanel
        selected={shirt}
        onSelect={setShirt}
      />
    </div>
  );
}

export default App;