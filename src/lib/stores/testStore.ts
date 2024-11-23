import { create } from 'zustand'

interface ITestStore {
    bears: number;
    increasePopulation: () => void;
}

const useTestStore = create<ITestStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useTestStore;