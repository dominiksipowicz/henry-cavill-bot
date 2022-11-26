import { Button } from './Button'
import { ChatLine } from './ChatLine'

export function Chat() {
  return (
    <div className="rounded-2xl border-zinc-100 dark:border-zinc-700/40 lg:border lg:p-6">
      <ChatLine
        who="henry"
        message="Hi, let's have a nice and pleasant chat here"
      />
      <ChatLine who="user" message="Are you going to play Superman again?" />
      <ChatLine who="henry" message="Yes, I Am Back as Superman" />

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
