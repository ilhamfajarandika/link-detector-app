import RiskMeter from "./RiskMeter";
import HighlightDomain from "./HighlightDomain";
import { AlertTriangle, ShieldCheck } from "lucide-react";

function ResultCard({ result }) {
  if (!result) return null;

  const score = result.riskScore ?? 0;
  const risky = score >= 40;

  return (
    <div className="bg-slate-900 p-6 rounded-xl mt-6 w-[520px] border border-slate-700">
      {/* STATUS */}
      <div className="flex items-center gap-2 mb-4">
        {risky ? (
          <AlertTriangle className="text-red-400" />
        ) : (
          <ShieldCheck className="text-green-400" />
        )}

        <span className="font-semibold">
          {risky ? "Suspicious Domain" : "Looks Safe"}
        </span>
      </div>

      {/* DOMAIN YANG DITAMPILKAN */}
      <div className="text-sm text-gray-400 mb-1">Detected Domain</div>

      <HighlightDomain
        domain={result.decodedDomain}
        suspiciousChars={result.suspiciousChars}
      />

      {/* TAMPILKAN PUNYCODE ASLI */}
      {result.punycodeDetected && (
        <div className="mt-3 text-xs text-gray-400">
          Encoded:
          <div className="font-mono text-red-400">{result.hostname}</div>
        </div>
      )}

      {/* SIMILARITY WARNING */}
      {result.similarityScore > 70 && (
        <div className="mt-4 text-yellow-400 text-sm">
          ⚠ Domain looks similar to
          <b> {result.similarDomain}</b>
          <div>Similarity: {result.similarityScore}%</div>
        </div>
      )}

      {/* ANALYSIS */}
      <div className="text-sm text-gray-300 mt-4 space-y-1">
        <p>
          Punycode detected:
          {result.punycodeDetected ? " Yes" : " No"}
        </p>

        <p>
          Unicode characters:
          {result.unicodeDetected ? " Yes" : " No"}
        </p>

        <p>
          Homograph attack:
          {result.homographDetected ? " Yes" : " No"}
        </p>
      </div>

      {/* RISK SCORE */}
      <RiskMeter score={score} />

      <div className="text-xs text-gray-400 mt-1">Risk Score: {score}%</div>
    </div>
  );
}

export default ResultCard;
