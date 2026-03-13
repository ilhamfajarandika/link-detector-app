// import detectLink from "../utils/detectLink.js";

// export default function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { url } = req.body;

//   const result = detectLink(url);

//   res.status(200).json(result);
// }

// export default function handler(req, res) {
//   res.status(200).json({ message: "API is working" });
// }

// import detectLink from "../utils/detectLink.js";

// export default function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { url } = req.body;

//   if (!url) {
//     return res.status(400).json({ error: "URL is required" });
//   }

//   try {
//     const result = detectLink(url);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// }

import detectLink from "../utils/detectLink.js";

export default function handler(req, res) {
  try {
    const { url } = req.body;

    const result = detectLink(url);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
