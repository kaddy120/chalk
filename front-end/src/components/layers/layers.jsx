import PropTypes from 'prop-types';
import { useRef } from 'react';

/*
 * Toggle hide
 * The layer should affect how the resume is rendered.
 * */

const Layers = ({ onSelect, layers }) => {
  const ulRef = useRef(null);
  // I don't know, but i need some way to indicate the arrangement of the layers.

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

    let listNodes = ulRef.current.childNodes;
    if (dragSrcEl !== e.target) {
      // dragSrcEl.innerHTML = e.target.innerHTML;

      const srcIndex = Number(dragSrcEl.getAttribute('data-index'));
      const targetIndex = Number(e.target.getAttribute('data-index'));
      if (srcIndex > targetIndex) {
        // move every element down up source index.
        // a function to shift elements of array by 1 from start index to end index.
        shiftElementsDown(listNodes, targetIndex, srcIndex);
      } else {
        // move things up to source index.
        console.log('listNode:', listNodes);
        shiftElementsUp(listNodes, srcIndex, targetIndex);
      }
      e.target.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

  function shiftElementsDown(listNodes, startIndex, endIndex) {
    // move every element down up source index.
    // a function to shift elements of array by 1 from start index to end index.
    for (let i = endIndex; i > startIndex; i--) {
      listNodes[i].innerHTML = listNodes[i - 1]?.innerHTML;
    }
  }

  function shiftElementsUp(listNodes, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      listNodes[i].innerHTML = listNodes[i + 1]?.innerHTML;
    }
  }

  return (
    <div className='layers'>
      <ul ref={ulRef}>
        {layers.map((layer, index) => {
          return (
            <li
              data-index={index}
              draggable='true'
              className='layers--item'
              key={index}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {/* <a href=''> */}
              <button data-index={index} onClick={onSelect}>
                {layer.name}
              </button>{' '}
              {layer.visible ? 'on' : 'off'}
              {/* </a> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Layers.propTypes = {
  onSelect: PropTypes.func,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      visible: PropTypes.bool,
    })
  ),
};

export default Layers;
