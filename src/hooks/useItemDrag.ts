import React from "react"
import { useDrag } from "react-dnd"
import { getEmptyImage } from "react-dnd-html5-backend"
import { useAppState } from "../AppStateContext"
import { DragItem } from "../DragItem"

const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag, preview] = useDrag({
    item,
    begin: () =>
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item,
      }),
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined }),
  })
  React.useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])
  return { drag }
}

export default useItemDrag
