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
const Select = ({ options, label, onValueChange }) => {
  const [visible, setVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState(options[0].value)

  const sortedOptions = useMemo(() => sortItems({ items: options, selectedValue }), [selectedValue, options])

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const handleSelect = (value) => {
    setSelectedValue(value)
    onValueChange(value)
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
            label={label}
            value={selectedValue}
            editable={false}
            onPress={openMenu}
            onClick={openMenu}
          />
        }
      >
        {sortedOptions.map((option, index) => (
          <Menu.Item
            key={index}
            onPress={() => handleSelect(option.value)}
            title={option.label}
          />
        ))}
      </Menu>
    </Box>
  )
}

export { Select }
