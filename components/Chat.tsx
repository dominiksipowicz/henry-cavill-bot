import { useEffect, useState } from 'react'
import { Button } from './Button'
import { type Message, ChatLine, LoadingChatLine } from './ChatLine'
import { useCookies } from 'react-cookie'
import { useResult } from 'vrq'

const COOKIE_NAME = 'henry-cavill-chat'

export const initialMessages: Message[] = [
  {
    who: 'henry',
    message: 'Hi! I’m Henry Cavill. What would you like to know about me?',
  },
]
// ok installed 

const InputMessage = ({ input, setInput, sendMessage }: any) => (
  <div className="mt-6 flex">
    <input
      type="text"
      aria-label="chat input"
      required
      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
      value={input}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          sendMessage(input)
          setInput('')
        }
      }}
      onChange={(e) => {
        setInput(e.target.value)
      }}
    />
    <Button
      type="submit"
      className="ml-4 flex-none"
      onClick={() => {
        sendMessage(input)
        setInput('')
      }}
    >
      Say
    </Button>
  </div>
)

export function Chat({ setShowDescription }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [cookie, setCookie] = useCookies([COOKIE_NAME])

  // disable description box in react effect when chat is active (more than 1 message)
  useEffect(() => {
    if (messages.length > 1) {
      setShowDescription(false)
    }
  }, [messages, setShowDescription])

  useEffect(() => {
    if (!cookie[COOKIE_NAME]) {
      // generate a random id
      const randomId = Math.random().toString(36).substring(7)
      setCookie(COOKIE_NAME, randomId)
    }
  }, [cookie, setCookie])

  // send message to API /api/chat endpoint
  const sendMessage = async (message: string) => {
    setLoading(true)
    const newMessages = [
      ...messages,
      { message: message, who: 'user' } as Message,
    ]
    setMessages(newMessages)
    const last10mesages = newMessages.slice(-10)

    // const { loading, result } = await fetch('/api/chat')

    const { loading, result, create } = useResult("/api/chat")

    create({
      prompt: message,
      messages: last10mesages,
      user: cookie[COOKIE_NAME],
    })

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: message,
        messages: last10mesages,
        user: cookie[COOKIE_NAME],
      }),
    })
    const data = await response.json()
    console.log({ data });

    // stip out white spaces from the bot message
    const botNewMessage = data.text.trim()

    setMessages([
      ...newMessages,
      { message: botNewMessage, who: 'henry' } as Message,
    ])
    setLoading(false)
  }

  return (
    <div className="rounded-2xl border-zinc-100 dark:border-zinc-700/40 lg:border lg:p-6">
      {messages.map(({ message, who }, index) => (
        <ChatLine key={index} who={who} message={message} />
      ))}

      {loading && <LoadingChatLine />}

      {messages.length < 2 && (
        <span className="mx-auto flex flex-grow dark:text-white">
          Type a message to start the conversation
        </span>
      )}
      <InputMessage
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </div>
  )
}
