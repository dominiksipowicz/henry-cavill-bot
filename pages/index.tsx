import Head from 'next/head'
import type { NextPage } from 'next'
import { useState } from 'react'

import { Container } from '../components/Container'
import { Chat } from '../components/Chat'

const Home: NextPage = () => {
  // showDescription box state
  const [showDescription, setShowDescription] = useState(true)

  return (
    <>
      <Head>
        <title>Henry Cavill Chat Bot - quotes, pictures and light Chat</title>
        <meta
          name="description"
          content="I’m Henry Cavil, an AI bot that can talk, joke, and hold a simple conversation based on Henry Cavill characters such as the Witcher, Superman, and Sherlock Holmes in the form of an AI"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="py-5 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Henry Cavill <span className="hidden sm:inline">Chat</span> Bot
          </h1>
          {!!showDescription && (
            <p className="mt-6 pb-5 text-base text-zinc-600 dark:text-zinc-400">
              The purpose of this project is to re-create a chat bot that can
              talk, joke, and hold a simple conversation based on Henry Cavill
              characters such as the Witcher, Superman, and Sherlock Holmes in
              the form of an AI.
            </p>
          )}
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Chat setShowDescription={setShowDescription} />
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

export default Home
