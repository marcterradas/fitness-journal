import { create } from 'zustand'

const useNavigationStore = create((set) => ({
  currentRoute: 'home',
  setCurrentRoute: (route) => set({ currentRoute: route })
}))

export { useNavigationStore }
