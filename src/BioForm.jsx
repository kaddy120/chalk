import PropTypes from 'prop-types';

function Input({ name, value, onChange, children }) {
  return (
    <div className='form-group'>
      <label htmlFor=''>{children}</label>
      <input
        className='form-control'
        name={name}
        value={value}
        type='text'
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default function BioForm(props) {
  const { bio, handleChange, setAboutMe , aboutMe} = props;
  return (
    <form className='col-md-4 p-4' action=''>
      <Input name='name' value={bio.name} onChange={handleChange}>
        Name
      </Input>
      <Input name='location' value={bio.location} onChange={handleChange}>
        Location
      </Input>
      <Input name='contact' value={bio.contact} onChange={handleChange}>
        Phone Number
      </Input>
      <Input name='email' value={bio.email} onChange={handleChange}>
        Email
      </Input>
      <Input name='url' value={bio.url} onChange={handleChange}>
        Personal website
      </Input>
      <Input name='url' value={bio.url} onChange={handleChange}>
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

      <div className='form-group'>
        <label htmlFor=''>about you</label>
        <textarea
          className='form-control'
          name=''
          id=''
          onChange={(e) => {
            setAboutMe(e.target.value);
          }}
          cols={50}
          rows={5}
          defaultValue={aboutMe}
        />
      </div>
    </form>
  );
}

BioForm.propTypes = {
  handleChange: PropTypes.func,
  setAboutMe: PropTypes.func,
  bio: PropTypes.object,
  aboutMe: PropTypes.string,
};
