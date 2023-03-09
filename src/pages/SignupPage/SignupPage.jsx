import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../shared/hooks/useForm';
import Button from '../../components/Button/Button';
import { signUp } from '../../redux/auth/auth-operations';
import { selectorError } from '../../redux/auth/auth-selectors';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const SignupPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(signUp(data));
  };
  const error = useSelector(selectorError);

  const { handleChangeInput, handleSubmitForm, state } = useForm({
    INITIAL_STATE,
    onSubmit: handleSubmit,
  });
  const { name, email, password } = state;
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <label>
          Name
          <input id="name" value={name} onChange={handleChangeInput} />
        </label>
        <label>
          Email
          <input id="email" value={email} onChange={handleChangeInput} />
        </label>
        <label>
          Password
          <input
            id="password"
            type="password"
            value={password}
            onChange={handleChangeInput}
          />
        </label>
        <Button type="submit">Signup</Button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
