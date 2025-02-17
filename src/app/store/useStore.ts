import { create } from 'zustand';

interface StoreState {
  status: string;
  gender: string;
  page: number,
  totalPages: number; 
  characterNames: string[]; 
  searchTerm: string; // Add searchTerm to the state
  setStatus: (status: string) => void;
  setGender: (gender: string) => void;
  setPage: (page: number) => void;
  setTotalPages: (totalPages: number) => void; 
  setCharacterNames: (names: string[]) => void;
  setSearchTerm: (searchTerm: string) => void; // Add setSearchTerm
}

export const useStore = create<StoreState>((set) => ({
  status: '',
  gender: '',
  page: 1,  
  totalPages: 1,
  characterNames: [],
  searchTerm: '', // Initialize searchTerm
  setStatus: (status) => set({ status }),
  setGender: (gender) => set({ gender }),
  setPage: (page) => set({ page }),
  setTotalPages: (totalPages) => set({ totalPages }),
  setCharacterNames: (names) => set({ characterNames: names }),
  setSearchTerm: (searchTerm) => set({ searchTerm }), // Define setSearchTerm
}));
