import { clothingData, clothingTypes } from "../clothingData";

function ColorDot({ hex, active, onClick }) {
  return (
    <button
      className={`color-dot ${active ? "active" : ""}`}
      style={{ backgroundColor: hex }}
      onClick={onClick}
      aria-label={`Cor ${hex}`}
    />
  );
}

export default function ClothingPanel({
  selected,
  selectedColor,
  onSelect,
  onColor,
}) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Provador 3D</h2>
        <span className="panel-sub">Personalize sua roupa</span>
      </div>

      <div className="panel-section">
        <h3>Tipo de roupa</h3>
        <div className="clothing-list">
          {clothingTypes.map((key) => {
            const item = clothingData[key];
            return (
              <button
                key={key}
                className={`clothing-btn ${selected === key ? "active" : ""}`}
                onClick={() => onSelect(key)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="panel-section">
        <h3>Cor</h3>
        <div className="color-list">
          {clothingData[selected]?.colors.map((c) => (
            <ColorDot
              key={c.value}
              hex={c.value}
              active={selectedColor === c.value}
              onClick={() => onColor(c.value)}
            />
          ))}
        </div>
        {clothingData[selected]?.colors.map(
          (c) =>
            selectedColor === c.value && (
              <span key={c.name} className="color-name">
                {c.name}
              </span>
            )
        )}
      </div>
    </div>
  );
}
