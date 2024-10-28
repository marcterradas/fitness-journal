/**
 * Sorts an array of items, placing the selected item first and sorting the rest alphabetically.
 *
 * @param {Object} params - The parameters object.
 * @param {Array<{label: string, value: string}>} params.items - The array of items to sort.
 * @param {string} params.selectedValue - The value of the selected item to place first.
 * @returns {Array<{label: string, value: string}>} - The sorted array of items.
 */
function sortItems ({ items, selectedValue }) {
  return [...items].sort((a, b) => {
    const valueA = a.value.toString().toLowerCase()
    const valueB = b.value.toString().toLowerCase()

    if (valueA === selectedValue) return -1
    if (valueB === selectedValue) return 1
    return valueA.localeCompare(valueB)
  })
}

export { sortItems }
