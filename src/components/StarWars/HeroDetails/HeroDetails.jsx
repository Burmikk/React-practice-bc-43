const HeroDetails = ({ data }) => {
  const { birth_year, hair_color, skin_color } = data;
  return (
    <>
      <p>Birth: {birth_year}</p>
      <p>Hair: {hair_color}</p>
      <p>Skin color: {skin_color}</p>
    </>
  );
};
export default HeroDetails;
