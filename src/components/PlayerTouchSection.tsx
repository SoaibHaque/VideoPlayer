export default function PlayerTouchSection() {
  return (
    <div className="absolute grid grid-cols-2 inset-0 z-10">
      <button
        className="outline-none hover:outline-none focus:outline-none"
        tabIndex={-1}
      ></button>
      <button
        className="outline-none hover:outline-none focus:outline-none"
        tabIndex={-1}
      ></button>
    </div>
  );
}
