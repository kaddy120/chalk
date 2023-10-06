import { createElement, useState } from 'react';
import BioForm from './BioForm';
import ChronologicalEventForm from './components/forms/ChronologicalEventForm';
import GeneralList from './components/forms/generalList';
import Layers from './components/layers';
import Page from './Page';
// import BioForm from './BioForm'

// or, specify which plugins you need:

function App() {
  const forms = [ChronologicalEventForm, GeneralList, BioForm];
  const [activeIndex, setActiveIndex] = useState(0);

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

  function handleClickLayers(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className='flex'>
        <div className='preview flex'>
          <Layers onClick={handleClickLayers} />
          {/* <BioForm */}
          {/*   bio={bio} */}
          {/*   handleChange={handleChange} */}
          {/*   aboutMe={aboutMe} */}
          {/*   setAboutMe={setAboutMe} */}
          {/* /> */}
          <div>
            {createElement(forms[activeIndex], {
              bio,
              handleChange,
              aboutMe,
              setAboutMe,
            })}

            <button
              onClick={() => {
                setActiveIndex(activeIndex - 1);
              }}
            >
              previous
            </button>
            <button
              onClick={() => {
                setActiveIndex(activeIndex + 1);
              }}
            >
              next
            </button>
          </div>
        </div>
        <Page aboutMe={aboutMe} bio={bio} />
      </div>
    </>
  );
}

export default App;
