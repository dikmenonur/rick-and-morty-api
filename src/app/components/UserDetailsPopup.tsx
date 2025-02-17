import { Character } from '@/types/character';
import { useEffect, useState } from 'react';

interface UserDetailsPopupProps {
  userId: number;
  onClose: () => void;
}

const UserDetailsPopup = ({ userId, onClose }: UserDetailsPopupProps) => {
  const [user, setUser] = useState<Character>();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUserDetails();
  }, [userId]);

  if (!user) return null;

  return (
    <div className="popup-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center popup-overlay" onClick={onClose}>
      <div className="popup-content bg-white p-6 rounded-lg w-80">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          Close
        </button>
        <img src={user.image} alt={user.name} className="w-32 h-32 rounded-full mb-4 mx-auto" />
        <h2 className="text-center text-xl font-semibold mb-2">{user.name}</h2>
        <p>Status: {user.status}</p>
        <p>Species: {user.species}</p>
        <p>Gender: {user.gender}</p>
        <p>Origin: {user.origin.name}</p>
        <p>Location: {user.location.name}</p>
      </div>
    </div>
  );
};

export default UserDetailsPopup;
