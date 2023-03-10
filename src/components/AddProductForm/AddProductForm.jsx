import useForm from '../../shared/hooks/useForm';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/products/products-operations';

const INITIAL_STATE = {
  name: '',
  price: '',
  description: '',
};

export const AddProductForm = ({ onSubmit }) => {
  const { handleChangeInput, handleSubmitForm, state } = useForm({
    INITIAL_STATE,
    onSubmit,
  });
  const dispatch = useDispatch();
  const { name, price, description } = state;

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={handleChangeInput} value={name} />
      <label htmlFor="price" id="price">
        Price
      </label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={handleChangeInput}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        onChange={handleChangeInput}
        value={description}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};
