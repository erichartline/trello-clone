const moveItem = <T>(array: T[], from: number, to: number) => {
  // must always be positive number
  // if you pass a negative index to thesplice function it will begin that many elements from the end
  const startIndex = to < 0 ? array.length + to : to
  const item = array.splice(from, 1)[0]
  // After we've calculated the startIndex that is always a positive number we can move items around. First, we remove the item with the from index and store it in the item const. Then we insert that item at startIndex position.
  array.splice(startIndex, 0, item)
  return array
}

export default moveItem
