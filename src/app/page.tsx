'use client';

import { useEffect, useState } from 'react';
import { Filters } from './components/Filters';
import { CharacterList } from './components/CharacterList';
import { Pagination } from './components/Pagination';
import { useStore } from './store/useStore';
import { fetchCharacters } from './api/characters';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState(''); // State for searchTerm
  const [status, setStatus] = useState(''); // State for status
  const [gender, setGender] = useState(''); // State for gender
  const [users, setUsers] = useState<any[]>([]); // Define users state at component level
  const setTotalPages = useStore((state) => state.setTotalPages); 

  useEffect(() => {
    const getTotalPages = async () => {
      try {
        // Add the missing 'searchTerm' argument (using an empty string for now)
        const response = await fetchCharacters(1, '', '', ''); // Adding an empty string for searchTerm
        setTotalPages(response.info.pages); 
      } catch (error) {
        console.error('Error fetching total pages:', error);
      }
    };

    getTotalPages(); 
    const fetchUsers = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setUsers(data.results);
    };

    fetchUsers();
  }, [setTotalPages]);

  const totalPages = useStore((state) => state.totalPages);
  const filteredUsers = users.filter(user => 
    (user.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (status ? user.status.toLowerCase() === status.toLowerCase() : true) &&
    (gender ? user.gender.toLowerCase() === gender.toLowerCase() : true)
  );

  return (
    <div className="container mx-auto p-4">
      {/* Pass state setters as props */}
      <Filters 
        setSearchTerm={setSearchTerm} 
        setStatus={setStatus} 
        setGender={setGender} 
      />
      {/* Pass searchTerm, status, and gender as props to CharacterList */}
      <CharacterList 
        searchTerm={searchTerm} 
        status={status} 
        gender={gender} 
        users={filteredUsers} // Make sure users are passed down to CharacterList
      />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
