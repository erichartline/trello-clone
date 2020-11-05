import React from "react"

const useFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    ref.current?.focus()
  }, [])

  return ref
}

export default useFocus
