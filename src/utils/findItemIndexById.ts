interface Item {
  id: string
}

// T means that we constrained our generic to have the fields that are defined on the Item interface. In this case the id field.
const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id)
}

export default findItemIndexById
