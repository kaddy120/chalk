import PropTypes from 'prop-types';
import { SectionTitle } from './SectionTitle';

/* component for Education, work experience, projects */
export default function DatedList({ title, itemGroup }) {
  return (
    <>
      <div>
        <SectionTitle>{title}</SectionTitle>
        <ul>
          {itemGroup.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <h5>{item.organization}</h5>
                  <i>{item.location}</i>
                </div>
                <div>
                  <h6>{item.course}</h6>
                  <i><span>{item.startDate}</span> - <span>{item.endDate}</span></i>
                </div>
                <ul>
                  {
                    item.details.map((detail, index)=>{
                      return(
                        <li key={index}>{detail}</li>
                      )
                    })
                  }
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

DatedList.propTypes = {
  title: PropTypes.string,
  itemGroup: PropTypes.object,
};
