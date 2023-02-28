import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleHero } from '../../sevices/starWarsHeroesAPI';

export const HeroPage = () => {
  const [hero, setHero] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getHero = async () => {
      try {
        const { data } = await getSingleHero(id);
        setHero(data);
      } catch (error) {}
    };
    getHero();
  }, [id]);

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = hero;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair color: {hair_color}</p>
      <p>Skin color: {skin_color}</p>
      <p>Eye color: {eye_color}</p>
      <p>Birth color: {birth_year}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};
