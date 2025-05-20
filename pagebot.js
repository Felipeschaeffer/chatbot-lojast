import axios from 'axios';

export const enviarMensagem = async (clienteId, texto) => {
  await axios.post('https://api.pagebot.com.br/v1/mensagens', {
    cliente_id: clienteId,
    mensagem: texto
  }, {
    headers: {
      Authorization: `Bearer ${process.env.PAGEBOT_API_KEY}`
    }
  });
};
