import PropTypes from 'prop-types';
import Input from './Input';

const GeneralList = (props) => {
  const { bio, handleChange, setAboutMe, aboutMe } = props;
  return (
    <div>
      <p>Hellow from generalist</p>
    <form className='flex' action=''>
      <Input name='category' value={bio.firstName} onChange={handleChange}>
        Category
      </Input>
      <Input
        name='list'
        value={bio.firstName}
        onChange={handleChange}
      >List</Input>
    </form>
    </div>
  );
};

GeneralList.propTypes = {
  handleChange: PropTypes.func,
  setAboutMe: PropTypes.func,
  bio: PropTypes.object,
  aboutMe: PropTypes.string,
};
export default GeneralList;
