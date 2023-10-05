import { useState } from 'react';
import BioForm from './BioForm';
import Layers from './components/layers';
import Page from './Page';
// import BioForm from './BioForm'

// or, specify which plugins you need:

function App() {
  let bioDetails = {
    firstName: 'Kaddy',
    lastName: 'Marindi',
    jobTitle: 'Teacher',
    country: 'South Africa',
    city: 'Polokwane',
    tel: '(+27)799895113',
    email: 'kaddy120@gmail.com',
    url: 'kaddy120.github.io',
    githubUsername: 'kaddy120',
    linkedIn: 'linked.com/kad.marindi',
    twitter: 'twitter.com/kaddy120',
    birthday: '',
    drivingLicense: 'code10',
    nationality: 'code10',
  };

  const [bio, setBio] = useState(bioDetails);
  const [aboutMe, setAboutMe] = useState(
    'Aspiring software developer, who is passionate about front-end development'
  );

  function handleChange(e) {
    setBio({
      ...bio,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <div className='flex'>
          <div className='preview flex'>

            <Layers />
            <BioForm
              bio={bio}
              handleChange={handleChange}
              aboutMe={aboutMe}
              setAboutMe={setAboutMe}
            />
          </div>
        <Page aboutMe={aboutMe} bio={bio} />
      </div>
    </>
  );
}

export default App;
