import { describe, it, expect } from 'vitest'

import { sortItems } from '@/domain/utils'

describe('sortItems function', () => {
  it('should sort items alphabetically, placing the selected item first', () => {
    const items = [
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
      { label: 'Three', value: '3' }
    ]
    const selectedValue = '2'

    const sortedItems = sortItems({ items, selectedValue })

    expect(sortedItems).toEqual([
      { label: 'Two', value: '2' },
      { label: 'One', value: '1' },
      { label: 'Three', value: '3' }
    ])
  })
})
