import * as React from 'react'

type ConditionalWrapProps = {
  children: JSX.Element
  condition: boolean
  wrap: (children: JSX.Element) => JSX.Element
}

export function ConditionalWrap({ children, condition, wrap }: ConditionalWrapProps) {
  return condition ? React.cloneElement(wrap(children)) : children;
}
