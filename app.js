import express from "express";
import morgan from "morgan";
import clientesRoutes from "./routes/clientes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const PORT = 3000;

// Middleware Global: log de requisições
app.use(morgan("dev"));

// Middleware para interpretar JSON
app.use(express.json());

// Rotas principais
app.use("/clientes", clientesRoutes);

// Middleware de erro (centralizado)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});