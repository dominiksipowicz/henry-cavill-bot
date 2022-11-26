import clsx from 'clsx'

type Message = {
  who: 'henry' | 'user' | undefined
  message?: string
}

export function ChatLine({ who = 'henry', message }: Message) {
  return (
    <div className="px-4 py-5 sm:px-6">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          {who === 'henry' ? (
            <img
              className="h-16 w-16 rounded-full"
              src="https://i.guim.co.uk/img/media/23ca2ec0ef254b2f5cfb4a1953c4e8b7a2483e19/0_273_4585_2751/master/4585.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1cde5e943fc55369e6d0fbf91704daf6"
              alt=""
            />
          ) : (
            <div className="h-16 w-16 rounded-full bg-gray-300" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-large text-xxl text-gray-900 dark:text-white">
            <a href="#" className="hover:underline">
              {who == 'henry' ? 'Henry Cavill' : 'You'}
            </a>
          </p>
          <p
            className={clsx(
              'text-lg ',
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
  )
}
