import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import HeroList from './HeroList/HeroList';
import { searchPeople } from '../../sevices/starWarsApi';
import Modal from '../../shared/Modal/Modal';
import HeroDetails from './HeroDetails/HeroDetails';

const StarWars = () => {
  const [search, setSearch] = useState('');
  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const { data } = await searchPeople(search);
        setPeople(data.results);
      } catch (error) {}
    };
    if (search) {
      fetchPeople();
    }
  }, [search]);

  const updateSearch = value => {
    setSearch(value.search);
  };

  const showHeroDetails = name => {
    setShowModal(true);
    const selectedHero = people.find(item => item.name === name);
    setSelected(selectedHero);
  };

  const onItemClick = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={onItemClick}>
          <HeroDetails data={selected} />
        </Modal>
      )}

      <SearchForm onSubmit={updateSearch} />
      <HeroList items={people} onClick={showHeroDetails} />
    </>
  );
};

export default StarWars;
