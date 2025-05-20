import axios from 'axios';

export const enviarPerguntaParaIA = async (mensagem) => {
  const resposta = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'Você é um atendente virtual da Loja ST, especializada em iPhones e patinetes elétricos.' },
      { role: 'user', content: mensagem }
    ]
  }, {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  return resposta.data.choices[0].message.content;
};
