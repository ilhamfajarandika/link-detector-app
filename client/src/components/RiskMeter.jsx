import { motion } from "framer-motion";

function RiskMeter({ score }) {
  const value = score ?? 0;

  return (
    <div className="mt-4 w-full">
      <div className="text-sm mb-1">Risk Score</div>

      <div className="bg-slate-700 h-3 rounded">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5 }}
          className="bg-red-500 h-3 rounded"
        />
      </div>

      <div className="text-xs mt-1">{value}%</div>
    </div>
  );
}

export default RiskMeter;
