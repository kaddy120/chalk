import PropTypes from 'prop-types';
import { SectionTitle } from './SectionTitle';

/* component for interst, skills, languages */
export default function Generic({ title, list }) {
  return (
    <>
      <div>
        <SectionTitle>{title}</SectionTitle>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index} className='flex'>
                <h6 className='pr-2'>{item.subtitle}</h6>
                <p>{item.list}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

Generic.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};
