import { create } from 'zustand'

interface SidebarState {
  sidebarIsOpen: boolean
  setSidebarIsOpen: (isOpen: boolean) => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  sidebarIsOpen: false,
  setSidebarIsOpen: (isOpen) => set({ sidebarIsOpen: isOpen }),
}))
