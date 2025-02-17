// hooks/useCharacters.ts
import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/characters';

export const useCharacters = (page: number, status: string, gender: string, searchTerm: string) => {
  return useQuery({
    queryKey: ['characters', page, status, gender, searchTerm], // queryKey'de sayfa ve filtre parametreleri olacak
    queryFn: () => fetchCharacters(page, status, gender), // Fetch fonksiyonuna parametreleri geçiriyoruz
    staleTime: 1000 * 60 * 5, // Cache'lenmiş verilerin 5 dakika boyunca geçerli olmasını sağlıyoruz
    refetchOnWindowFocus: true,  // Pencere yeniden odaklanınca veriyi tekrar al
    refetchOnMount: true, // Component mount edildiğinde veriyi tekrar al
  });
};
