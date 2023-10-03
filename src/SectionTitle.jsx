import PropTypes from 'prop-types';

export function SectionTitle({ children }) {
  return (
    <div className='flex'>
      <h3 className='m0'>{children}</h3>
      <div className='line' />
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

