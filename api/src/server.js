const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

// Criação de um novo usuário
app.post('/users', async (req, res) => {
  const { name } = req.body;
  const user = await prisma.user.create({ data: { name } });
  res.json(user);
});

// Listagem de usuários
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Envio de mensagem
app.post('/messages', async (req, res) => {
  const { senderId, receiverId, content } = req.body;
  const message = await prisma.message.create({
    data: { senderId, receiverId, content },
  });
  res.json(message);
});

// Listagem de mensagens entre usuários
app.get('/messages/:userId', async (req, res) => {
  const { userId } = req.params;
  const messages = await prisma.message.findMany({
    where: {
      OR: [{ senderId: parseInt(userId) }, { receiverId: parseInt(userId) }],
    },
    include: { sender: true, receiver: true },
  });
  res.json(messages);
});

// Transação de pontos entre usuários
app.post('/points', async (req, res) => {
  const { senderId, receiverId, points } = req.body;
  const transaction = await prisma.pointTransaction.create({
    data: { senderId, receiverId, points },
  });

  // Atualização dos pontos do sender e receiver
  await prisma.user.update({
    where: { id: senderId },
    data: { points: { decrement: points } },
  });

  await prisma.user.update({
    where: { id: receiverId },
    data: { points: { increment: points } },
  });

  res.json(transaction);
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
