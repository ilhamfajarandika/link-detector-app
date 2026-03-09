import { useState } from "react";
import { Search } from "lucide-react";

function UrlInput({ onCheck }) {
  const [url, setUrl] = useState("");

  return (
    <div className="flex gap-2">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste suspicious URL..."
        className="bg-slate-800 px-4 py-3 rounded-lg w-[420px]"
      />

      <button
        onClick={() => onCheck(url)}
        className="bg-blue-600 px-4 rounded-lg flex items-center gap-2"
      >
        <Search size={18} />
        Scan
      </button>
    </div>
  );
}

export default UrlInput;
