'use client';

import { useState } from 'react';
import { useStore } from '../store/useStore'; // useStore hook'unu ekleyin
import { useCharacters } from '../hooks/useCharacters';
import UserDetailsPopup from './UserDetailsPopup';

interface CharacterListProps {
  searchTerm: string;
  status: string;
  gender: string;
}

export const CharacterList = ({ searchTerm, status, gender }: CharacterListProps) => {
  const { page } = useStore();  // Or use state if you want pagination
  const { data, isLoading, isError } = useCharacters(page, status, gender, searchTerm);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);  // Fix: Set null as default for number | null

  const openUserDetails = (userId: number) => {
    setSelectedUserId(userId);
  };

  const closePopup = () => {
    setSelectedUserId(null);
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error fetching characters</div>;

  return (
    <div className="character-list user-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
 {data?.results.map(user => (
          <div
            key={user.id}
            className="user-item cursor-pointer rounded-lg border p-4"
            onClick={() => openUserDetails(user.id)} 
          >
            <img src={user.image} alt={user.name} className="rounded-full w-16 h-16 mb-2" />
            <p className="text-center">{user.name}</p>
          </div>
        ))}

      {/* Render the UserDetailsPopup if a user is selected */}
      {selectedUserId && <UserDetailsPopup userId={selectedUserId} onClose={closePopup} />}
    </div>
  );
};
