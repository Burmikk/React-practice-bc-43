const HeroList = ({ items = [], onClick }) => {
  const peopleCreate = items.map(
    ({ name, gender, birth_year, hair_color, skin_color }) => (
      <li key={name} onClick={() => onClick(name)}>
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
      </li>
    )
  );
  return <ul>{peopleCreate}</ul>;
};

export default HeroList;
