import { createElement, useState } from 'react';
import BioForm from './components/forms/BioForm';
import createChronoOccupationForm, {
  EducationForm,
  EmploymentForm,
} from './components/forms/ChronologicalEventForm';
import GeneralList from './components/forms/generalList';
import Layers from './components/layers/layers';
import Page from './resume';
// import BioForm from './BioForm'

// or, specify which plugins you need:

function App() {
  // The order of the form should corrospond to layout layers
  // and the order of the layers should also dictate the order of
  // the resume

  const forms = [
    { name: 'Personal', visible: true, render: BioForm },
    { name: 'Education', visible: true, render: EducationForm },
    { name: 'Emplyoment', visible: true, render: EmploymentForm },
    { name: 'Skills', visible: true, render: GeneralList },
    { name: 'Project', visible: true, render: EducationForm },
  ];

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

  function selectForm(e) {
    e.preventDefault();
    let index = e.target.getAttribute('data-index');
    setActiveIndex(Number(index));
  }

  return (
    <>
      <div className='flex'>
        <div className='preview flex'>
          <Layers layers={forms} onSelect={selectForm} />
          {/* <BioForm */}
          {/*   bio={bio} */}
          {/*   handleChange={handleChange} */}
          {/*   aboutMe={aboutMe} */}
          {/*   setAboutMe={setAboutMe} */}
          {/* /> */}
          <div>
            {/* display a form */}
            {createElement(forms[activeIndex].render, {
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
