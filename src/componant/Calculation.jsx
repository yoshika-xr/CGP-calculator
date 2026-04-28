function Calculation({ data, onChange, onRemove }) {
  return (
    <div className="inside-calc">
      <input
        type="text"
        placeholder="Enter subject name"
        value={data.name}
        onChange={(e) => onChange("name", e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter subject code"
        value={data.code}
        onChange={(e) => onChange("code", e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter grade"
        value={data.grade}
        onChange={(e) => onChange("grade", e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter credits"
        value={data.credit}
        onChange={(e) => onChange("credit", e.target.value)}
      />

      <i className="bi bi-x-circle" onClick={onRemove}></i>
    </div>
  );
}