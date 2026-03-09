import { useState } from "react";
import axios from "axios";

import UrlInput from "./components/UrlInput";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  const checkUrl = async (url) => {
    const res = await axios.post("http://localhost:5000/api/detect", { url });

    setResult(res.data);
    console.log(res.data);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-8">Link Guardian</h1>

      <UrlInput onCheck={checkUrl} />

      {result && <ResultCard result={result} />}
    </div>
  );
}

export default App;
