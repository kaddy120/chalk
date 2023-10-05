import PropTypes from 'prop-types';

export default function Input({ name, value, onChange, children, type}) {
  return (
    <div className='form-group'>
      <label htmlFor=''>{children}</label>
      <input
        className='form-control'
        name={name}
        placeholder={value}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text'
}
