import { Router } from "express";
import validarCliente from "../middlewares/validarCliente.js";

const router = Router();

let clientes = [
  { id: 1, nome: "João Silva", cidade: "Itajaí" },
  { id: 2, nome: "Maria Souza", cidade: "Balneário Camboriú" },
];

// Listar todos (com filtro opcional por cidade via query string)
router.get("/", (req, res) => {
  const { cidade } = req.query;
  if (cidade) {
    const filtrados = clientes.filter(
      (cliente) => cliente.cidade.toLowerCase() === cidade.toLowerCase()
    );
    return res.json(filtrados);
  }
  res.json(clientes);
});

// Buscar por ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const cliente = clientes.find((c) => c.id === id);
  if (!cliente) {
    return res.status(404).json({ erro: "Cliente não encontrado" });
  }
  res.json(cliente);
});

// Criar novo cliente (usa middleware de validação)
router.post("/", validarCliente, (req, res) => {
  const { nome, cidade } = req.body;
  const novoCliente = {
    id: clientes.length + 1,
    nome,
    cidade,
  };
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
});

// Remover cliente
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  clientes = clientes.filter((c) => c.id !== id);
  res.json({ mensagem: "Cliente removido com sucesso" });
});

export default router;