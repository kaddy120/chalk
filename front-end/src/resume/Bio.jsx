import PropTypes from 'prop-types';
import { usePageContenxt } from './ResumeContext';

export default function Bio({ bio, aboutMe }) {
  const theme = usePageContenxt()

  return (
    <div>
      <h1 id='name'>{bio.name}</h1>
      <ul className='contacts-group'>
        <li>{bio.contact}</li>
        <li>{bio.email}</li>
        <li>{bio.url}</li>
        <li>{bio.githubUsername}</li>
        <li>{bio.linkedIn}</li>
        <li>{bio.twitter}</li>
        <li>{theme.name}</li>
      </ul>
      <p id='about-me'>{aboutMe}</p>
    </div>
  );
}

Bio.propTypes = {
  bio: PropTypes.object,
  aboutMe: PropTypes.string,
};

