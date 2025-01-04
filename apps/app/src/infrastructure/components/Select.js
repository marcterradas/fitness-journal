import { Picker } from '@react-native-picker/picker'
import { useState, useMemo } from 'react'

import { Box } from '@/infrastructure/components/Box'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { fontSizes, borderWidth, borderRadius, height, colors } from '@/infrastructure/styles'

import { sortItems } from '@/domain/utils'

/**
 * Select component for rendering a dropdown list.
 *
 * @param {Object} props - The component props.
 * @param {Array<{label: string, value: string}>} props.items - The array of items to display in the dropdown.
 * @param {function(string): void} props.onSelectChange - The callback function to call when the selected value changes.
 */
function Select ({ items = [], onSelectChange = () => {} }) {
  const { isMobile } = useDeviceType()
  const placeholder = items[0]?.value || ''
  const [selectedValue, setSelectedValue] = useState(placeholder)
  const sortedItems = useMemo(() => sortItems({ items, selectedValue }), [selectedValue, items])

  const styles = useStyles({
    pickerContainer: {
      borderColor: colors.black,
      borderRadius,
      borderWidth,
      display: 'flex',
      height,
      justifyContent: 'center',
      margin: 0,
      overflow: 'hidden',
      padding: 0,
      width: '100%'
    },
    picker: {
      backgroundColor: colors.white,
      fontSize: isMobile ? fontSizes.sm : fontSizes.md,
      height,
      margin: 0,
      padding: 0,
      width: '100%'
    },
    pickerItem: {
      fontSize: isMobile ? fontSizes.sm : fontSizes.md,
      margin: 0,
      padding: 0
    }
  })

  function handleSelect (itemValue) {
    setSelectedValue(itemValue)
    onSelectChange(itemValue)
  }

  return (
    <Box style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => handleSelect(itemValue)}
        style={styles.picker}
      >
        {sortedItems.map((item) => (
          <Picker.Item
            key={item.value}
            label={item.label}
            value={item.value}
            style={styles.pickerItem}
          />
        ))}
      </Picker>
    </Box>
  )
}

export { Select }
