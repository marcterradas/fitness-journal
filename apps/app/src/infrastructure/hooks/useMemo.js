import { useMemo as ReactUseMemo } from 'react'

function useMemo (calculateValue, dependencies) {
  return ReactUseMemo(calculateValue, dependencies)
}

export { useMemo }
