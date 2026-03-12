import { useState } from "react";
import { Search } from "lucide-react";

function UrlInput({ onCheck }) {
  const [url, setUrl] = useState("");

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste suspicious URL..."
        className="bg-slate-800 px-4 py-3 rounded-lg w-full"
      />

      {/* <button
        onClick={() => onCheck(url)}
        className="bg-blue-600 px-4 py-3 rounded-lg flex items-center justify-center gap-2 sm:w-auto w-full"
      >
        <Search size={18} />
        Scan
      </button> */}

      <button
        onClick={() => {
          console.log("clicked");
          onCheck(url);
        }}
        className="bg-blue-600 px-4 py-3 rounded-lg flex items-center justify-center gap-2 sm:w-auto w-full"
      >
        Scan
      </button>
    </div>
  );
}

export default UrlInput;
