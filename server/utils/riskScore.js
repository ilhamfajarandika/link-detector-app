function calculateRisk(data) {
  let score = 0;

  if (data.punycodeDetected) score += 30;

  if (data.homographDetected) score += 30;

  if (data.unicodeDetected) score += 20;

  if (data.similarityScore > 80) score += 30;
  else if (data.similarityScore > 60) score += 15;

  if (data.domainLength > 20) score += 5;

  if (score > 100) score = 100;

  return score;
}

module.exports = calculateRisk;
