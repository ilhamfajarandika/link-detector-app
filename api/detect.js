const detectLink = require("../server/utils/detectLink");

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { url } = req.body;

  const result = detectLink(url);

  res.status(200).json(result);
}
