import { Dispatch, SetStateAction } from 'react';

interface FiltersProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setStatus: Dispatch<SetStateAction<string>>;
  setGender: Dispatch<SetStateAction<string>>;
}

export const Filters = ({ setSearchTerm, setStatus, setGender }: FiltersProps) => {

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };


  return (
    <div className="filters">
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search Characters..."
        className="mb-4 p-2 border rounded"
      />
      <select onChange={handleStatusChange} className="mb-4 p-2 border rounded">
        <option value="">All Statuses</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select onChange={handleGenderChange} className="mb-4 p-2 border rounded">
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

     
    </div>
  );
};
