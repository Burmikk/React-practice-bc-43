import PropTypes from 'prop-types';

const Button = ({ type = 'button', children, onBtnClick, disabled }) => {
  return (
    <>
      <button onClick={onBtnClick} disabled={disabled} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  onBtnClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
};
