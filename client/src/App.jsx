import { useState } from "react";
import axios from "axios";

import UrlInput from "./components/UrlInput";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  const checkUrl = async (url) => {
    const res = await axios.post("/api/detect", { url });

    setResult(res.data);
    // console.log(res.data);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-xl flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Link Guardian
        </h1>

        <UrlInput onCheck={checkUrl} />

        {result && (
          <div className="w-full mt-6">
            <ResultCard result={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
