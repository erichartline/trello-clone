import React from "react"
import { useDrop } from "react-dnd"
import AddNewItem from "./AddNewItem"
import Card from "./Card"
import { useAppState } from "./AppStateContext"
import useItemDrag from "./hooks/useItemDrag"
import isHidden from "./utils/isHidden"
import { DragItem } from "./DragItem"
import { ColumnContainer, ColumnTitle } from "./styles"

interface ColumnProps {
  text: string
  index: number
  id: string
}

const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState()
  const ref = React.useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({ type: "COLUMN", id, index, text })
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } })
      item.index = hoverIndex
    },
  })

  drag(drop(ref))

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(state.draggedItem, "COLUMN", id)}>
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
