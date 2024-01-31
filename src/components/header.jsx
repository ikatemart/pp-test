import cx from 'clsx';

const Header = () => {
  return (
    <header
      className={cx(
        'flex h-full justify-center items-center relative',
        'text-15 text-white2 tracking-p2'
      )}
    >
      {/* menu */}
      <nav className="pr-8 opacity-90 sm:-mr-24">
        <ul className="flex gap-40">
          <MenuItem text="Integrations"/>
          <MenuItem text="Core Platform" dropdown />
          <MenuItem text="Company" dropdown />
          <MenuItem text="Resources" dropdown />
        </ul>
      </nav>

      {/* buttons */}
      <div className="absolute right-0 sm:hidden">
        {/* "contact sales" button */}
        <button className="mr-32 font-medium tracking-p2">Contact Sales</button>

        {/* "book a demo" button */}
        <button
          className={cx(
            'px-18 py-10 rounded-full bg-white2',
            'font-semibold tracking-p2 text-black'
          )}
        >
          Book a Demo
        </button>
      </div>
    </header>
  );
};

const MenuItem = ({ text = '', dropdown = false } = {}) => {
  return (
    <li>
      <a className="flex items-center gap-4" href="#">
        {text}
        {dropdown && (
          <svg
            className="relative -top-1"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path stroke="currentColor" d="M2.5 6 6 9l3.5-3" />
          </svg>
        )}
      </a>
    </li>
  );
};

export default Header;
