# Sistema de Login (CRUD)

Sistema simples de **Login e Registro de Usuários** utilizando **CRUD** (Create, Read, Update, Delete).

## 🚀 Tecnologias

* Node.js
* TypeScript
* Express
* MySQL
* ts-node

## 📂 Funcionalidades (CRUD)

* **Create**: Registrar usuário
* **Read**: Login / buscar usuário
* **Update**: Atualizar dados do usuário
* **Delete**: Remover usuário

## ⚙️ Requisitos

* Node.js v18+
* MySQL
* npm

## 📦 Instalação

```bash
npm install
```

## ▶️ Executar o projeto

```bash
npx ts-node src/server.ts
```

Servidor:

```
http://localhost:3000
```

## 🗄️ Banco de Dados (exemplo)

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

## 📡 Rotas principais

* `POST /register` → registrar usuário
* `POST /login` → login
* `GET /users` → listar usuários
* `PUT /users/:id` → atualizar usuário
* `DELETE /users/:id` → deletar usuário

## 🔒 Observações

* `node_modules` não é versionado
* Use `.env` para dados sensíveis

## 📌 Autor

Luiz

---

Projeto educacional para estudo de CRUD e autenticação.
