import PropTypes from 'prop-types';
import Input from './Input';
import InputFile from './InputFile';
import Lexical from '../lexical';

export default function BioForm(props) {
  const { bio, handleChange, setAboutMe, aboutMe } = props;
  return (
    <div>
      <form className='w-100' action=''>
        <Input name='firstName' value={bio.firstName} onChange={handleChange}>
          First Name
        </Input>
        <Input name='lastName' value={bio.lastName} onChange={handleChange}>
          Last Name
        </Input>
        <InputFile />
        <Input name='jobTitle' value={bio.jobTitle} onChange={handleChange}>
          Wanted Job Title
        </Input>
        <Input name='country' value={bio.country} onChange={handleChange}>
          Country
        </Input>
        <Input name='City' value={bio.city} onChange={handleChange}>
          City
        </Input>
        <Input name='tel' type='tel' value={bio.tel} onChange={handleChange}>
          Phone Number
        </Input>
        <Input
          name='email'
          type='email'
          value={bio.email}
          onChange={handleChange}
        >
          Email
        </Input>
        <Input name='url' type='url' value={bio.url} onChange={handleChange}>
          Personal website
        </Input>
        <Input
          name='githubUsername'
          value={bio.githubUsername}
          onChange={handleChange}
        >
          Github userName
        </Input>
        <Input name='linkedIn' value={bio.linkedIn} onChange={handleChange}>
          LinkedIn
        </Input>
        <Input name='twitter' value={bio.twitter} onChange={handleChange}>
          Twitter
        </Input>

        <div>
          <label htmlFor=''>Date of Birth</label>
          <input name='birthday' type='date' />
        </div>

        <Input
          name='drivingLicense'
          value={bio.twitter}
          onChange={handleChange}
        >
          Driving License
        </Input>
        <Input name='nationality' value={bio.twitter} onChange={handleChange}>
          Nationality
        </Input>
      </form>
      <Lexical />
    </div>
  );
}

BioForm.propTypes = {
  handleChange: PropTypes.func,
  setAboutMe: PropTypes.func,
  bio: PropTypes.object,
  aboutMe: PropTypes.string,
};
