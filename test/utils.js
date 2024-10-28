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

  it('should return an empty array if no items are provided', () => {
    const items = []
    const selectedValue = '2'

    const sortedItems = sortItems({ items, selectedValue })

    expect(sortedItems).toEqual([])
  })

  it('should return the original array if no selected value is provided', () => {
    const items = [
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
      { label: 'Three', value: '3' }
    ]
    const selectedValue = ''

    const sortedItems = sortItems({ items, selectedValue })

    expect(sortedItems).toEqual(items)
  })

  it('should return an empty array if neither items nor selected value are provided', () => {
    const sortedItems = sortItems({})

    expect(sortedItems).toEqual([])
  })

  it('should return an empty array if no parameters are passed', () => {
    const sortedItems = sortItems()

    expect(sortedItems).toEqual([])
  })
})
