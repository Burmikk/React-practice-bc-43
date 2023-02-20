import PropTypes from 'prop-types';

const Button = ({ type = 'button', children, onBtnClick }) => {
  return (
    <>
      <button onClick={onBtnClick} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
};
