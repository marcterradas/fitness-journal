import { useState, useMemo } from 'react'
import { Picker } from 'react-native'

import { Box } from '@/infrastructure/components/Box'

import { sortItems } from '@/domain/utils'

/**
 * Select component for rendering a dropdown list.
 *
 * @param {Object} props - The component props.
 * @param {Array<{label: string, value: string}>} props.items - The array of items to display in the dropdown.
 * @param {function(string): void} props.onSelectChange - The callback function to call when the selected value changes.
 */
function Select ({ items = [], onSelectChange = () => {} }) {
  const placeholder = items[0]?.value || ''

  const [selectedValue, setSelectedValue] = useState(placeholder)

  const sortedItems = useMemo(() => {
    return sortItems(items, selectedValue)
  }, [selectedValue, items])

  function handleSelect (itemValue) {
    setSelectedValue(itemValue)
    onSelectChange(itemValue)
  }

  return (
    <Box>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => handleSelect(itemValue)}
      >
        {sortedItems.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </Box>
  )
}

export { Select }
