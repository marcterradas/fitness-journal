import { Picker } from '@react-native-picker/picker'
import { useState, useMemo } from 'react'

import { Box } from '@/infrastructure/components/Box'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { fontSizes, borderWidth, borderRadius, colors } from '@/infrastructure/styles'

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
      width: '100%',
      borderWidth,
      borderRadius,
      borderColor: colors.black,
      backgroundColor: colors.white,
      padding: 0,
      margin: 0
    },
    picker: {
      width: '100%',
      height: 40,
      fontSize: isMobile ? fontSizes.sm : fontSizes.md,
      padding: 0,
      margin: 0
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
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </Box>
  )
}

export { Select }
