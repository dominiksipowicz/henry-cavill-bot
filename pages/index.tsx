import Head from 'next/head'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { ChatLine } from '../components/ChatLine'
function Chat() {
  return (
    <div className="rounded-2xl border-zinc-100 dark:border-zinc-700/40 lg:border lg:p-6">
      <ChatLine direction="left" />
      <ChatLine direction="right" />
      <ChatLine direction="right" />

      <div className="mt-6 flex">
        <input
          type="text"
          aria-label="chat input"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Say
        </Button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Henry Cavill Chat Bot - quotes, pictures and light Chat</title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Henry Cavill <span className="hidden sm:inline">Chat</span> Bot
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            The purpose of this project is to re-create a chat bot that can
            talk, joke, and hold a simple conversation based on Henry Cavill
            characters such as the Witcher, Superman, and Sherlock Holmes in the
            form of an AI.
          </p>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Chat />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
