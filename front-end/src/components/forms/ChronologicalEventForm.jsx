import PropTypes from 'prop-types';
import { useState } from 'react';
import Lexical from '../lexical';
import Input from './Input';

const config = {
  employement: {
    org: {
      label: 'Employer',
      name: 'employer',
    },
    occupation: {
      label: 'Job title',
      name: 'jobTitle',
    },
  },
  education: {
    org: {
      label: 'School',
      name: 'school',
    },
    occupation: {
      label: 'Degree',
      name: 'degree',
    },
  },
  personalProject: {
    org: {
      label: 'Employer',
      name: 'employer',
    },
    occupation: {
      label: 'Job title',
      name: 'jobTitle',
    },
  },
  internship: {
    org: {
      label: 'Employer',
      name: 'employer',
    },
    occupation: {
      label: 'Job title',
      name: 'jobTitle',
    },
  },
};

function createChronoOccupationForm(config) {
  const { org, occupation } = config;

  const Form = (props) => {
    const { bio, handleChange, setAboutMe, aboutMe } = props;
    return (
      <div>
        <form action=''>
          <p>Hellow from chronlogicEvent</p>
          <Input name={org.name} value={bio.firstName} onChange={handleChange}>
            {org.label}
          </Input>
          <Input
            name={occupation.name}
            value={bio.firstName}
            onChange={handleChange}
          >
            {occupation.label}
          </Input>
          <div>
            <label htmlFor=''>Start & End Date</label>
            <input name='birthday' type='date' />
            <input name='birthday' type='date' />
          </div>
          <Input name='firstName' value={bio.firstName} onChange={handleChange}>
            City
          </Input>
        </form>
        <Lexical />
      </div>
    );
  };

  Form.propTypes = {
    handleChange: PropTypes.func,
    setAboutMe: PropTypes.func,
    bio: PropTypes.object,
    aboutMe: PropTypes.string,
  };

  return Form;
}

export const EmploymentForm = createChronoOccupationForm(config.employement);
const SchoolForm = createChronoOccupationForm(config.education);

export function EducationForm(props) {
  const [schoolFormList, setSchoolFormList] = useState([SchoolForm]);
  function addSchoolForm(e) {
    e.preventDefault();
    setSchoolFormList([...schoolFormList, SchoolForm]);
  }

  return (
    <div>
      <ul>
        {schoolFormList.map((Form, index) => {
          // The reason I'm putting in the list is so that i 
          // can easily drag you around. 
          return <li key={index}><Form {...props} /></li>;
        })}
        <button onClick={addSchoolForm}>Add</button>
      </ul>
    </div>
  );
}

export default createChronoOccupationForm;
