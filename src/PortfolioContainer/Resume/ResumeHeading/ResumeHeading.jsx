import PropTypes from 'prop-types';

const ResumeHeading = ({
  heading, fromDate, toDate, subHeading, description, description1, live, link,
}) => (
  <div className="resume-heading">
    <div className="resume-main-heading">
      <div className="heading-bullet" />
      <span>{heading || ''}</span>
      {fromDate && toDate ? (
        <div className="heading-date">
          {`${fromDate}-${toDate}`}
        </div>
      ) : (
        <div />
      )}
    </div>
    <div className="resume-sub-heading">
      <span>{subHeading || ''}</span>
    </div>
    <div className="resume-heading-description">
      <span>{description || ''}</span>
    </div>
    <div className="resume-heading-description">
      <span>{description1 || ''}</span>
    </div>
    <div className="resume-heading-description">
      <a href={link}>{live || ''}</a>
    </div>
  </div>
);

ResumeHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
};

export default ResumeHeading;
