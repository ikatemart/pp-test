import cx from 'clsx';
import HeroInput from 'components/hero-input';

const HeroBanner = () => {
  return (
    <div className="sm:text-center">
      {/* title */}
      <h1
        className={cx(
          'mb-28 text-white2 [text-shadow:0_0_20px_rgba(255,255,255,0.2)]',
          'font-poppins text-76 font-normal leading-112 tracking-n2'
        )}
      >
        Unlock valuable insights from subscription data
      </h1>

      {/* description */}
      <p className="mb-40 text-white3 text-20 font-light leading-150 tracking-p2">
        Analyze your subscription ecosystem for cost optimization and risk management
      </p>

      {/* input */}
      <div className="max-w-[504px] sm:max-w-600px sm:mx-auto">
        <HeroInput/>
      </div>
    </div>
  );
};

export default HeroBanner;
