import PropTypes from 'prop-types';

/* Introduction/Bio name, contacts and about me statement*/
export default function Bio({ bio, aboutMe }) {
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
      </ul>
      <p id='about-me'>{aboutMe}</p>
    </div>
  );
}

Bio.propTypes = {
  bio: PropTypes.object,
  aboutMe: PropTypes.string,
};

