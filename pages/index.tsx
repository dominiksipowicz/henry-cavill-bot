// import Image from 'next/image'
import Head from 'next/head'
// import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '../components/Button'
import { Container } from '../components/Container'
// import image1 from '@/images/photos/image-1.jpg'
// import image2 from '@/images/photos/image-2.jpg'
// import image3 from '@/images/photos/image-3.jpg'
// import image4 from '@/images/photos/image-4.jpg'
// import image5 from '@/images/photos/image-5.jpg'

function Example({ direction = 'left' }) {
  return (
    <div className="px-4 py-5 sm:px-6">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <img
            className="h-16 w-16 rounded-full"
            src="https://i.guim.co.uk/img/media/23ca2ec0ef254b2f5cfb4a1953c4e8b7a2483e19/0_273_4585_2751/master/4585.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1cde5e943fc55369e6d0fbf91704daf6"
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-large text-xxl text-gray-900 dark:text-white">
            <a href="#" className="hover:underline">
              Henry Cavill
            </a>
          </p>
          <p className="text-lg text-gray-500">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
    </div>
  )
}

function Chat() {
  return (
    <div className="rounded-2xl border-zinc-100 dark:border-zinc-700/40 lg:border lg:p-6">
      <Example direction="left" />
      <Example direction="right" />
      <Example direction="right" />

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

// function Photos() {
//   let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

//   return (
//     <div className="mt-16 sm:mt-20">
//       <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
//         {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
//           <div
//             key={image.src}
//             className={clsx(
//               'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
//               rotations[imageIndex % rotations.length]
//             )}
//           >
//             <Image
//               src={image}
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

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
            Henry Cavill Chat Bot
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
