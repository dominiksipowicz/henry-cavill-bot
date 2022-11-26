import { Configuration, OpenAIApi } from 'openai'

import { initialMessages } from '../../components/Chat' 

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const firstMessge = initialMessages[0].message


export default async function handler(req: any, res: any) {  

  const prompt = req.body.prompt;
  const botName = 'Henry';
  const userName = process.env.AI_USER_NAME ?? 'Gabi';
  const defaultPrompt = `I am Henry Cavil. \n\nThis is the conversation between Henry Cavil and a news reporter.\n\n${botName}: ${firstMessge}\nNews reporter: ${prompt}\n${botName}: `;
  const finalPrompt = process.env.OPENAI_API_KEY ? `${process.env.AI_PROMPT}${prompt}\n${botName}: ` : defaultPrompt
  
  
  const payload = {
    model: "text-davinci-002",
    prompt: finalPrompt,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS ? parseInt(process.env.AI_MAX_TOKENS) : 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: [`${userName}:`, `${botName}:`, "News reporter:"],
    user: req.body?.user
  };

  const response = await openai.createCompletion(payload);
  const firstResponse = response.data.choices[0].text;
  
  res.status(200).json({ text: firstResponse })
}

