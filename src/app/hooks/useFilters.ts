// hooks/useFilters.ts
import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';

export const useFilters = () => {
  // Accessing global store values
  const { status, gender, setStatus, setGender, setSearchTerm, characterNames } = useStore();
  
  const [searchTerm, setLocalSearchTerm] = useState('');  // Local state for the search term
  const [filteredNames, setFilteredNames] = useState<string[]>([]);

  // Update filtered names based on the search term
  useEffect(() => {
    if (searchTerm) {
      setFilteredNames(characterNames.filter((name) => name.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
      setFilteredNames(characterNames); // Reset to all names if search term is empty
    }
  }, [searchTerm, characterNames]);

  // Handle search term change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalSearchTerm(value);
    setSearchTerm(value); // Sync the local search term to the global state
  };

  // Handle status change
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  // Handle gender change
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  // Return necessary state and functions for use in the component
  return {
    status,
    gender,
    searchTerm,
    filteredNames,
    handleSearchChange,
    handleStatusChange,
    handleGenderChange,
  };
};
