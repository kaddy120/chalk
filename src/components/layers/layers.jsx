import PropTypes from 'prop-types';

/*
 * Toggle hide
 * */

const Layers = ({ onClick }) => {
  const layers = ['personal', 'education', 'skills', 'experince', 'project'];
  let dragSrcEl;

  function handleDragStart(e) {
    e.target.style.opacity = '0.4';

    dragSrcEl = e.target;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';

    const targetElement = e.target;
    const parentElement = targetElement.parentElement;
    const siblings = Array.from(parentElement.children);
    siblings.forEach((element) => {
      element.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    e.dataTransfer.dropEffect = 'move';
    e.preventDefault();
    return false;
  }

  function handleDragEnter(e) {
    e.target.classList.add('over');
  }

  function handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.

    if (dragSrcEl !== e.target) {
      dragSrcEl.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
  }

  return (
    <div className='layers'>
      <ul>
        {layers.map((layer, index) => {
          return (
            <li
              draggable='true'
              className='layers--item'
              onClick={onClick}
              key={index}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {/* <a href=''> */}
              {layer}
              {/* </a> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Layers.propTypes = {
  onClick: PropTypes.func,
};
export default Layers;
