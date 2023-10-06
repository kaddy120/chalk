import PropTypes from 'prop-types'

const Layers = ({onClick}) => {
  const layers = ['personal', 'education', 'skills', 'experince', 'project'];
  return (
    <div className='layers'>
      <ul>
        {layers.map((layer, index) => {
          return <li onClick={onClick} key={index}>
            <a href=''>{layer} </a>
          </li>
        })}
      </ul>
    </div>
  );
};

Layers.propTypes = {
  onClick: PropTypes.func,
}
export default Layers;
