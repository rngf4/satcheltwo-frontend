export function Button({ callback, children }) {
  return (
    <button
      onClick={callback}
      className="bg-gray-800 rounded p-1 text-slate-200"
    >
      {children}
    </button>
  );
}
