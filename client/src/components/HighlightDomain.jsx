function HighlightDomain({ domain, suspiciousChars }) {
  if (!domain) return null;

  const chars = Array.from(domain);

  return (
    <div className="font-mono text-lg">
      {chars.map((char, i) => {
        const suspicious =
          suspiciousChars && suspiciousChars.find((c) => c.char === char);

        if (suspicious) {
          return (
            <span key={i} className="text-red-400 font-bold">
              {char}
            </span>
          );
        }

        return (
          <span key={i} className="text-white">
            {char}
          </span>
        );
      })}
    </div>
  );
}

export default HighlightDomain;
