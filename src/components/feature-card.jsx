import cx from 'clsx';
import PropTypes from 'prop-types';

const FeatureCard = ({ value, title, description }) => {
  return (
    <div className="sm:text-center">
      <div role="heading" aria-level="2">
        {/* value */}
        <div className="mb-14 w-fit relative sm:mx-auto">
          {/* value text */}
          <div
            className={cx(
              'font-poppins text-136 relative z-10 font-extralight leading-100 tracking-n4 lining-nums',
              'bg-clip-text text-transparent',
              'bg-[linear-gradient(133deg,_#d383fc_22%,_#cb6afb_40%,_rgba(203,106,251,0.2)_87%)]'
            )}
          >
            {value}
          </div>

          {/* value bg bubble */}
          <div className="absolute inset-0 blur-[100px] opacity-20">
            <div className="absolute inset-0 bg-pink [clip-path:ellipse(50%_50%)]"/>
          </div>
        </div>

        {/* title */}
        <div className="text-24 leading-112 tracking-p2 text-white2">{title}</div>
      </div>

      {/* divider */}
      <div className="h-1 my-32 bg-white opacity-10"/>

      {/* description */}
      <p className="text-18 font-light leading-150 tracking-p2 text-white3">{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
