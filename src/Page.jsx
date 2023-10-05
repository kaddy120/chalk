import PropTypes from 'prop-types';
import Bio from './bio';
import DatedList from './DatedList';
import { defaultResume } from './defaultResume.config';
import EditorContext from './EditorContext';
import Generic from './Generic';

function Page({ bio, aboutMe }) {
  const list = defaultResume.genericItems.skills;
  const interest = defaultResume.genericItems.interests;
  const itemGroup = defaultResume.datedItems.education;

  return (
    <EditorContext>
      <div className='preview'>
        <div className='A4 py-4 px-3 mx-auto component'>
          <Bio bio={bio} aboutMe={aboutMe} />
          <Generic title='Skills' list={list} />
          <Generic title='Interest' list={interest} />
          <DatedList itemGroup={itemGroup} title='Education' />
        </div>
      </div>
    </EditorContext>
  );
}

Page.propTypes = {
  bio: PropTypes.object,
  aboutMe: PropTypes.string,
};

export default Page;
