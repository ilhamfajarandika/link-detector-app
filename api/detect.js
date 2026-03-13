import detectLink from "../utils/detectLink.js";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;

  const result = detectLink(url);

  res.status(200).json(result);
}
// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { url } = req.body;

//   if (!url) {
//     return res.status(400).json({ message: "URL is required" });
//   }

//   try {
//     const suspiciousWords = ["login", "verify", "bank", "update", "secure"];

//     const found = suspiciousWords.some(word =>
//       url.toLowerCase().includes(word)
//     );

//     res.status(200).json({
//       url,
//       isSuspicious: found,
//       message: found
//         ? "This link looks suspicious"
//         : "This link looks safe",
//     });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// }
