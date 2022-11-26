import { Configuration, OpenAIApi } from 'openai'

import { initialMessages } from '../../components/Chat' 

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const firstMessge = initialMessages[0].message

export default async function handler(req: any, res: any) {  

  const prompt = req.body.prompt;

  const payload = {
    model: "text-davinci-002",
    prompt:
      `I am Henry Cavil. \n\nThis is the conversation between Henry Cavil and a news reporter.\n\nHenry Cavil: ${firstMessge}\nNews reporter: ${prompt}`,
    temperature: 0.7,
    max_tokens: 1917,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["News reporter", "Reporter"],
    user: req.body?.user
  };

  console.log(" === PAYLOAD = ", payload)

  const response = await openai.createCompletion(payload);

  const firstResponse = response.data.choices[0].text;

  // trim Donald string and white spaces
  const text = firstResponse
  ?.replace("\nHenry Cavil: ", "")
  .replace(", Henry", "")
  .replace(". Cavil: ", "")
  
  // trim some edge cases
  
  

  res.status(200).json({ text: text })
}

