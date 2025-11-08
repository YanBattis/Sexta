# API de Clientes - Express.js (ES Modules)

Projeto desenvolvido como **Atividade Prática – Express.js**  
Disciplina: *Programação Web (UNIVALI)*  
Professor: *Welington Gadelha*

---

## 🚀 Tecnologias
- Node.js
- Express
- Morgan (middleware de log)
- ES Modules (`import/export`)

---

## 📂 Estrutura
```
app.js
routes/
  clientes.js
middlewares/
  logMiddleware.js
  validarCliente.js
  errorHandler.js
```

---

## 🧩 Funcionalidades REST

| Método | Rota | Descrição |
|--------|------|------------|
| GET | `/clientes` | Lista todos os clientes |
| GET | `/clientes?cidade=Itajaí` | Filtra clientes por cidade |
| GET | `/clientes/:id` | Busca cliente pelo ID |
| POST | `/clientes` | Cria novo cliente |
| DELETE | `/clientes/:id` | Remove cliente |

---

## 📘 Conceitos Explicados

### 🔹 Roteamento
O **Express Router** permite dividir as rotas em módulos, melhorando a organização.  
- Rotas no `app.js`: definidas diretamente (ex.: `app.get("/clientes")`)
- Rotas modulares (`Router()`): separadas em arquivos e importadas no `app.js`.

### 🔹 Parâmetros de Rota
Usados para identificar recursos específicos (ex.: `/clientes/:id`).  
No Express, são lidos com `req.params.id`.

### 🔹 Query Strings
Usadas para filtros e parâmetros opcionais na URL (ex.: `/clientes?cidade=Itajaí`).  
São acessadas via `req.query`.

### 🔹 Middlewares
Funções que processam requisições antes da resposta:
1. **Global:** executado em todas as rotas (`morgan`, log de requisições)
2. **De rota:** aplicado em rotas específicas (ex.: `validarCliente`)
3. **De erro:** trata exceções de forma centralizada (`errorHandler`)

---

## ▶️ Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor:
   ```bash
   npm start
   ```

3. Acesse:
   ```
   http://localhost:3000/clientes
   ```

---

## 🧪 Exemplos de Requisições

### Criar cliente:
```bash
POST /clientes
{
  "nome": "Ana Pereira",
  "cidade": "Itapema"
}
```

### Filtrar por cidade:
```
GET /clientes?cidade=Itajaí
```

---

## 📸 Evidências de Funcionamento
- [x] Rotas funcionando (listar, criar, buscar e remover)
- [x] Middlewares aplicados
- [x] Filtros com query string
- [x] Documentação completa
