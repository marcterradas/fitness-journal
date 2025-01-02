import { Picker } from '@react-native-picker/picker'
import { useState, useMemo } from 'react'

import { Box } from '@/infrastructure/components/Box'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { fontSizes, spacerHalf, borderWidth, borderRadius, colors } from '@/infrastructure/styles'

import { sortItems } from '@/domain/utils'

/**
 * Select component for rendering a dropdown list.
 *
 * @param {Object} props - The component props.
 * @param {Array<{label: string, value: string}>} props.items - The array of items to display in the dropdown.
 * @param {function(string): void} props.onSelectChange - The callback function to call when the selected value changes.
 */
function Select ({ items = [], onSelectChange = () => {} }) {
  const { isMobile, isDesktop } = useDeviceType()
  const placeholder = items[0]?.value || ''
  const [selectedValue, setSelectedValue] = useState(placeholder)
  const sortedItems = useMemo(() => sortItems({ items, selectedValue }), [selectedValue, items])

  const styles = useStyles({
    pickerContainer: {
      width: '100%',
      borderWidth,
      borderRadius,
      borderColor: colors.black
    },
    picker: {
      fontSize: isMobile ? fontSizes.sm : fontSizes.md,
      padding: isDesktop ? spacerHalf : 0
    }
  })

  function handleSelect (itemValue) {
    setSelectedValue(itemValue)
    onSelectChange(itemValue)
  }

  return (
    <Box style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
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
