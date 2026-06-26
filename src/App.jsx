import { useState } from "react";
import Avatar from "./components/Avatar";
import ClothingPanel from "./components/ClothingPanel";
import { clothingData, getDefaultColor } from "./clothingData";
import "./App.css";

function App() {
  const [shirt, setShirt] = useState("polo");
  const [color, setColor] = useState(getDefaultColor("polo"));

  const handleSelect = (type) => {
    setShirt(type);
    setColor(getDefaultColor(type));
  };

  const handleColor = (c) => {
    setColor(c);
  };

  return (
    <div className="layout">
      <Avatar shirt={shirt} color={color} />

      <ClothingPanel
        selected={shirt}
        selectedColor={color}
        onSelect={handleSelect}
        onColor={handleColor}
      />
    </div>
  );
}

export default App;
