import PropTypes from 'prop-types';

export function SectionTitle({ children }) {
  return (
    <div className='node_title flex'>
      <h3 className='m0'>
        {children}
      </h3>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
