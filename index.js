import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { enviarMensagem } from './services/pagebot.js';
import { enviarPerguntaParaIA } from './services/openai.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const { mensagem, cliente } = req.body;
  console.log('Mensagem recebida:', mensagem);

  const resposta = await enviarPerguntaParaIA(mensagem);

  await enviarMensagem(cliente.id, resposta);

  res.sendStatus(200);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
