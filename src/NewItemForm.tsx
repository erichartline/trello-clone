import React from "react"
import useFocus from "./hooks/useFocus"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles"

interface NewItemFormProps {
  onAdd(text: string): void
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = React.useState("")
  const inputRef = useFocus()

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text)
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  )
}

export default NewItemForm
