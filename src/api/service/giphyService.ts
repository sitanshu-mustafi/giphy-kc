import { GifData } from '../../types/Gif';

const API_KEY = 'qwT4bka8Z4NtSC8IazQh35XJ8BGwouAu';

export const fetchTrendingGifs = async (
  limit: number,
  offset: number
): Promise<any> => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`
    );

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('Error fetching trending GIFs:', error);
    return [];
  }
};
