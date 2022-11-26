import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = ({ className = '', children, ...props }) => {
  return (
    <div className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
}

const InnerContainer = ({ className = '', children, ...props }) => {
  return (
    <div
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
}

export const Container = ({ className = '', children, ...props }) => {
  return (
    <OuterContainer {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
}

Container.Outer = OuterContainer
Container.Inner = InnerContainer
