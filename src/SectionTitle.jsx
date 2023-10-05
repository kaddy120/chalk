import PropTypes from 'prop-types';
import { createRef } from 'react';

function handleFocusFactory(ref, setState) {
  return () => {
    ref.current.setAttribute('contentEditable', 'true');
    window.addEventListener('keydown', () => {
      console.log(ref.current.innerHTML);
    });
  };
}

export function SectionTitle({ children }) {
  const titleRef = createRef();
  const handleFocus = handleFocusFactory(titleRef);

  return (
    <div className='node_title flex'>
      <h3 ref={titleRef} onClick={handleFocus} className='m0'>
        {children}
      </h3>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
