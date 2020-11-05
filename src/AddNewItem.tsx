import React from "react"
import NewItemForm from "./NewItemForm"
import { AddItemButton } from "./styles"

interface AddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}

const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps) => {
  const [showForm, setShowForm] = React.useState(false)

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}

export default AddNewItem
