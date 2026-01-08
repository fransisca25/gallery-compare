export default function ButtonMain({ text, classname, onClick }) {
  return (
    <button className={classname} onClick={onClick}>
      {text}
      {(classname === "main-btn intro-btn" || classname === "main-btn intro-next-btn") && (
        <span className="arrow">›</span>
      )}
    </button>
  );
}
