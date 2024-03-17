import { useEffect, useState } from 'react';
import { fetchTrendingGifs } from '../api/service/giphyService';
import { GifData } from '../types/Gif';

const useTrendingGifs = () => {
  const [trendingGifs, setTrendingGifs] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    fetchTrendingGifs(25, (page - 1) * 25)
      .then((gifs: GifData[]) => {
        setTrendingGifs((prevGifs: any) => [...prevGifs, ...gifs]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching trending GIFs:', error);
        setLoading(false);
      });
  }, [page]);

  const loadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { trendingGifs, loading, loadMore };
};

export default useTrendingGifs;
