import { Menu } from 'react-native-paper'

import { Box } from '@/infrastructure/components/Box'
import { Input } from '@/infrastructure/components/Input'
import { useMemo } from '@/infrastructure/hooks/useMemo'
import { useState } from '@/infrastructure/hooks/useState'

import { sortItems } from '@/domain/utils'

/**
 * Select component for rendering a dropdown list.
 *
 * @param {Object} props - The component props.
 * @param {Array<{label: string, value: string}>} props.options - The array of options to display in the dropdown.
 * @param {function(string): void} props.onValueChange - The callback function to call when the selected value changes.
 */
const Select = ({ options, onValueChange, isCompact }) => {
  const [visible, setVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState(options[0])
  const sortedOptions = useMemo(() => sortItems({ items: options, selectedValue: selectedValue.value }), [selectedValue, options])

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const handleSelect = (option) => {
    setSelectedValue(option)
    onValueChange(option.value)
    closeMenu()
  }

  return (
    <Box>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Input
            type="select"
            isCompact={isCompact}
            value={selectedValue.label}
            editable={false}
            onPress={openMenu}
            onClick={openMenu}
          />
        }
      >
        {sortedOptions.map((option, index) => (
          <Menu.Item
            key={index}
            onPress={() => handleSelect(option)}
            title={option.label}
          />
        ))}
      </Menu>
    </Box>
  )
}

export { Select }
