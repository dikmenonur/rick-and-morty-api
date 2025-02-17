import { CharactersResponse } from '../../types/character';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (page: number, status: string, gender: string): Promise<CharactersResponse> => {
  const response = await fetch(`${API_URL}?page=${page}&status=${status}&gender=${gender}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};