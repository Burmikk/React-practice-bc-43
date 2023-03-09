import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../shared/hooks/useForm';
import Button from '../../components/Button/Button';
import { logIn } from '../../redux/auth/auth-operations';
import { selectorError } from '../../redux/auth/auth-selectors';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(logIn(data));
  };
  const error = useSelector(selectorError);

  const { handleChangeInput, handleSubmitForm, state } = useForm({
    INITIAL_STATE,
    onSubmit: handleSubmit,
  });
  const { email, password } = state;
  return (
    <>
      <form onSubmit={handleSubmitForm}>
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
        <Button type="submit">Login</Button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
