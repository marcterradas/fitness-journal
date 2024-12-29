import { create } from 'zustand'

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  updateUser: (newUser) => set((state) => ({ user: { ...state.user, ...newUser } }))
}))

export { useUserStore }
