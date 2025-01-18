import { create } from 'zustand'

const useNavigationStore = create((set) => ({
  currentRoute: null,
  setCurrentRoute: (route) => set({ currentRoute: route })
}))

export { useNavigationStore }
