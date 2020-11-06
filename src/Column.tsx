import React from "react"
import AddNewItem from "./AddNewItem"
import Card from "./Card"
import { useAppState } from "./AppStateContext"
import { ColumnContainer, ColumnTitle } from "./styles"

interface ColumnProps {
  text: string
  index: number
  id: string
}

const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState()

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, listId: id } })
        }
        dark
      />
    </ColumnContainer>
  )
}

export default Column
