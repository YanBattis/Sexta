export default function validarCliente(req, res, next) {
  const { nome, cidade } = req.body;
  if (!nome || !cidade) {
    return res.status(400).json({ erro: "Nome e cidade são obrigatórios" });
  }
  next();
}