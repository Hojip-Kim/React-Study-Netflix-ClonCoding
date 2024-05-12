import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

const DetailPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);

      setMovie(request.data);
    }

    fetchData();
  });

  if (!movie) return null;

  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
};

export default DetailPage;
