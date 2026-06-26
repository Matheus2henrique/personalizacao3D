function ClothingPanel({
  selected,
  onSelect
}) {
  const clothes = [
    "polo",
    "regata",
    "camiseta",
    "social"
  ];

  return (
    <div className="panel">
      <h2>Escolha a roupa</h2>

      {clothes.map(item => (
        <button
          key={item}
          className={
            selected === item
              ? "active"
              : ""
          }
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ClothingPanel;