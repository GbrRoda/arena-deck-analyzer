export default async function handler(req, res) {
  const tag = req.query.tag;

  if (!tag) {
    return res.status(400).json({ error: "Tag obrigatória" });
  }

  try {
    const response = await fetch(
      `https://api.clashroyale.com/v1/players/%23${tag}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CR_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar jogador" });
  }
}
