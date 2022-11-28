import clsx from 'clsx'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

// wrap Balancer to remove type errors :( - @TODO - fix this ugly hack
const BalancerWrapper = (props: any) => <Balancer {...props} />

export type Message = {
  who: 'henry' | 'user' | undefined
  message?: string
}

export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="flex-shrink-0">
        <div className="h-16 w-16 rounded-full bg-zinc-700" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-large text-xxl text-gray-900 dark:text-white">
          <a href="#" className="hover:underline">
            Henry Cavill
          </a>
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-700"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-700"></div>
          </div>
          <div className="h-2 rounded bg-zinc-700"></div>
        </div>
      </div>
    </div>
  </div>
)

export function ChatLine({ who = 'henry', message }: Message) {
  return (
    <BalancerWrapper
      className={who != 'henry' ? 'float-right flex' : 'flex-left flex'}
    >
      <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 dark:bg-zinc-800 dark:ring-zinc-300/20 sm:px-6">
        <div className="flex space-x-3">
          {who === 'henry' ? (
            <div className="flex-shrink-0">
              <Image
                className="h-16 w-16 rounded-full"
                src="https://res.cloudinary.com/df2kntp8j/image/upload/v1669507570/henry1_wyva9x.png"
                alt="Henry Cavill"
                width={64}
                height={64}
                priority
              />
            </div>
          ) : null}
          <div className="flex-1 gap-4">
            <p className="font-large text-xxl text-gray-900 dark:text-white">
              <a href="#" className="hover:underline">
                {who == 'henry' ? 'Henry Cavill' : 'You'}
              </a>
            </p>
            <p
              className={clsx(
                'text ',
                who == 'henry'
                  ? 'font-bold dark:text-gray-400'
                  : 'text-gray-400 dark:text-gray-500'
              )}
            >
              {!!message
                ? message
                : 'lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'}
            </p>
          </div>
        </div>
      </div>
    </BalancerWrapper>
  )
}
