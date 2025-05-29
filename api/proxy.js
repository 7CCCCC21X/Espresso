export default async function handler(req, res) {
  const { hash } = req.query;
  if (!hash) {
    return res.status(400).json({ error: "Missing hash" });
  }

  try {
    const response = await fetch(`https://composables.espresso.foundation/api/check-hash/${hash}`);
    const data = await response.text(); // 返回是 text/plain
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from upstream", details: err.message });
  }
}
