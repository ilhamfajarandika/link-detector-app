import brands from "./brandDomains.js";
import similarityPercent from "./similarity.js";
import punycode from "punycode";

const homographMap = {
  а: "a",
  е: "e",
  ο: "o",
  ρ: "p",
  с: "c",
  і: "i",
  ӏ: "l",
  ν: "v",
};

function getMainDomain(domain) {
  const parts = domain.split(".");
  if (parts.length >= 2) {
    return parts[parts.length - 2];
  }
  return parts[0];
}

function normalizeDomain(str) {
  return str
    .toLowerCase()
    .replace(/0/g, "o")
    .replace(/1/g, "l")
    .replace(/3/g, "e")
    .replace(/5/g, "s")
    .replace(/7/g, "t");
}

function detectLink(inputUrl) {
  try {
    let url = inputUrl;

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }

    const parsed = new URL(url);

    const rawHostname = parsed.hostname;

    const punycodeDetected = rawHostname.includes("xn--");

    const decodedDomain = punycodeDetected
      ? punycode.toUnicode(rawHostname)
      : rawHostname;

    const unicodeDetected = /[^\u0000-\u007f]/.test(decodedDomain);

    let suspiciousChars = [];

    for (const char of decodedDomain) {
      if (homographMap[char]) {
        suspiciousChars.push({
          char,
          looksLike: homographMap[char],
        });
      }
    }

    const homographDetected = suspiciousChars.length > 0;

    let riskScore = 0;

    if (punycodeDetected) riskScore += 40;
    if (unicodeDetected) riskScore += 30;
    if (homographDetected) riskScore += 30;

    const mainDomain = getMainDomain(decodedDomain);
    const normalizedDomain = normalizeDomain(mainDomain);
    const domainParts = normalizedDomain.split("-");

    let similarDomain = null;
    let similarityScore = 0;

    // cek apakah domain sama persis dengan brand
    for (const brand of brands) {
      const brandName = normalizeDomain(getMainDomain(brand));

      if (domainName === brandName) {
        similarityScore = 0;
        similarDomain = null;
        return {
          original: inputUrl,
          hostname: rawHostname,
          decodedDomain,
          punycodeDetected,
          unicodeDetected,
          homographDetected,
          suspiciousChars,
          similarityScore,
          similarDomain,
          domainLength: decodedDomain.length,
          riskScore: 0,
        };
      }
    }

    for (const brand of brands) {
      const brandName = normalizeDomain(getMainDomain(brand));

      for (const part of domainParts) {
        const score = similarityPercent(part, brandName);

        if (score > similarityScore) {
          similarityScore = score;
          similarDomain = brand;
        }
      }
    }

    if (similarityScore > 85) riskScore += 40;
    else if (similarityScore > 75) riskScore += 25;

    if (riskScore > 100) riskScore = 100;

    return {
      original: inputUrl,
      hostname: rawHostname,
      decodedDomain,
      punycodeDetected,
      unicodeDetected,
      homographDetected,
      suspiciousChars,
      similarityScore,
      similarDomain,
      domainLength: decodedDomain.length,
      riskScore,
    };
  } catch {
    return { error: "Invalid URL" };
  }
}

// module.exports = detectLink;
export default detectLink;
