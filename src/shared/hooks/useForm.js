import{useState} from 'react'

const useForm = (INITIAL_STATE, onSubmit,) => {
    const [state, setState] = useState({ ...INITIAL_STATE })
    
    const handleChangeInput = ({ target }) => {
    const { id, value, checked, type } = target;

    setState(prevState => {
      return { ...prevState, [id]: type === 'checkbox' ? checked : value };
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit({ ...state });
     setState({ ...INITIAL_STATE });
  };
    
    return {handleChangeInput,handleSubmitForm,state}

}
export default useForm