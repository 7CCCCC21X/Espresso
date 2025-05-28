export default async function handler(req, res) {
  const { hash } = req.query;

  if (!hash) {
    return res.status(400).send("Missing hash parameter");
  }

  const targetUrl = `https://composables.espresso.foundation/api/check-hash/${hash}`;

  try {
    const response = await fetch(targetUrl);
    const data = await response.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Proxy fetch failed");
  }
}
