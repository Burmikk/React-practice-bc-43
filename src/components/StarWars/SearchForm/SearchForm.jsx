import useForm from '../../../shared/hooks/useForm';

const SearchForm = ({ onSubmit }) => {
  const {handleChangeInput,handleSubmitForm,state} = useForm({search:''}, onSubmit);

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        name="search"
        onChange={handleChangeInput}
        type="text"
        value={state.search}
        id='search'
      />
      <button type="submit" disabled={!state.search.trim()}>Search</button>
    </form>
  );
};

export default SearchForm;
