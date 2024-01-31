import cx from 'clsx';
import Image from 'next/image';
import bubbles from 'images/hero-bubbles.svg';
import noise from 'images/hero-noise.png';
import lines from 'images/hero-lines.svg';

const HeroCard = () => {
  return (
    <div
      className={cx(
        'flex justify-center items-center relative',
        'w-[464px] pt-28 px-28 pb-22 rounded-3',
        'text-12 leading-200 tracking-p2 text-white'
      )}
    >
      <Bubbles />
      <Mockups />
      <Background />
      <Content />
    </div>
  );
};

const Bubbles = () => {
  return (
    <Image
      className="absolute max-w-max pointer-events-none"
      src={bubbles}
      width={916}
      height={997}
      alt=""
      priority
    />
  );
};

const Mockups = () => {
  return (
    <div className="absolute inset-0 pointer-events-none mix-blend-overlay">
      <div className="absolute left-[-88px] top-[66px] -rotate-4 opacity-40">
        <Mockup />
      </div>
      <div className="absolute right-[-88px] top-[66px] rotate-4 -scale-x-100 opacity-40">
        <Mockup />
      </div>
      <div className="absolute left-[-44px] top-[33px] -rotate-2">
        <Mockup />
      </div>
      <div className="absolute right-[-44px] top-[33px] rotate-2 -scale-x-100">
        <Mockup />
      </div>
    </div>
  );
};

const Background = () => {
  return (
    <div
      className={cx(
        'absolute inset-0 rounded-3 pointer-events-none',
        'shadow-[0_40px_80px_60px_rgba(14,10,15,0.7)]'
      )}
    >
      <div className="absolute inset-0 rounded-3 backdrop-blur-[5px]">
        {/* color */}
        <div className="absolute inset-0 rounded-3 bg-[#352e38] opacity-40 " />

        {/* noise */}
        <Image
          className="absolute inset-0 w-full h-full rounded-3 object-cover opacity-4"
          src={noise.src}
          width={noise.width}
          height={noise.height}
          style={{ width: 'auto' }}
          alt=""
          priority
        />
      </div>

      {/* lines overlay */}
      <Image
        className="absolute inset-0 rounded-3 w-full h-full"
        src={lines}
        alt=""
        fill
        priority
      />

      {/* solid border */}
      <div className="absolute inset-0 rounded-3 border border-white opacity-40 mix-blend-overlay" />

      {/* gradient border */}
      <div
        className={cx(
          'absolute inset-0 rounded-3 opacity-60 mix-blend-overlay',
          'border-image-[linear-gradient(to_top_right,_#fff_0%,_transparent_15.6%,_transparent_88.4%,_#fff_100%)]'
        )}
      />
    </div>
  );
};

const Content = () => {
  return (
    <div className="relative w-full">
      <Logo />
      <div className="h-14" />
      <Divider />
      <div className="h-16" />
      <Address />
      <div className="h-16" />
      <Divider />
      <div className="h-24" />
      <Terms />
      <div className="h-18" />
      <Table />
      <div className="h-22" />
      <Footer />
    </div>
  );
};

const Logo = () => {
  return (
    <Overlay>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="23"
        fill="none"
        title="Acme Corp logo"
      >
        <path
          className="fill-white"
          d="M9.184.136h-1.21L2.826 15.844c-.44 1.342-.924 1.628-2.31 1.628V18h4.972v-.528c-2.09 0-2.112-.352-1.694-1.628l1.078-3.41h5.896l1.056 3.388c.396 1.298.374 1.65-1.76 1.65V18h6.688v-.528c-1.43 0-1.914-.286-2.376-1.628L9.184.136ZM7.798 3.304h.088l2.596 8.272H5.158l2.64-8.272ZM20.62 18.352c1.98 0 3.586-1.54 3.828-5.192h-.528c-.396 2.772-1.518 3.52-2.508 3.52-1.804 0-2.684-2.288-2.684-5.148 0-2.486.66-4.664 2.244-4.664.66 0 1.078.374 1.078 1.122 0 .462-.154.902-.154 1.276 0 .55.352 1.012 1.034 1.012.748 0 1.166-.55 1.166-1.474 0-1.65-1.254-2.86-3.102-2.86-2.838 0-4.444 2.772-4.444 6.424 0 3.52 1.496 5.984 4.07 5.984Zm19.673-9.24c0-2.024-.792-3.168-2.332-3.168-1.496 0-2.442 1.056-3.256 2.31h-.066c-.22-1.496-.99-2.31-2.288-2.31-1.496 0-2.442 1.056-3.278 2.31h-.066V6.23l-.418-.33-3.212 1.342.22.484c1.298-.528 1.298-.242 1.298 1.232v6.776c0 1.408-.198 1.738-1.496 1.738V18h4.906v-.528c-1.122 0-1.298-.33-1.298-1.738V9.156c.792-1.1 1.518-1.672 2.332-1.672.792 0 1.232.55 1.232 1.738v6.512c0 1.408-.176 1.738-1.298 1.738V18h4.686v-.528c-1.1 0-1.276-.33-1.276-1.738V9.068c.77-1.034 1.474-1.584 2.266-1.584s1.232.55 1.232 1.738v6.512c0 1.408-.176 1.738-1.276 1.738V18h4.862v-.528c-1.276 0-1.474-.33-1.474-1.738V9.112Zm9.82 4.18c-.528 2.662-1.672 3.432-2.662 3.432-1.826 0-2.75-2.112-2.75-5.104v-.044h5.808c0-3.212-1.21-5.632-3.784-5.632-2.618 0-4.158 2.948-4.158 6.424 0 3.63 1.562 5.984 4.048 5.984 2.068 0 3.564-1.518 4.026-5.06h-.528Zm-3.388-6.424c1.298 0 1.672 1.694 1.672 3.806h-3.674c.132-2.2.682-3.806 2.002-3.806Zm9.98 2.486c0 5.016 2.443 8.998 6.799 8.998 3.74 0 5.697-2.904 6.116-7.502h-.639c-.462 3.542-2.067 6.204-4.751 6.204-3.037 0-4.84-3.366-4.84-7.986 0-4.598 1.76-8.052 4.84-8.052 2.331 0 3.673 1.98 4.29 5.456h.505l-.33-6.226h-.505l-.11.968c-.044.418-.308.506-.638.198C66.43.444 65.242.048 63.834.048c-4.269 0-7.129 4.004-7.129 9.306Zm19.166 8.998c2.97 0 4.73-2.728 4.73-6.27 0-3.608-1.891-6.138-4.73-6.138-2.992 0-4.73 2.728-4.73 6.27 0 3.608 1.87 6.138 4.73 6.138Zm.33-.968c-1.935 0-2.86-3.476-2.86-6.468 0-1.936.639-4.004 2.2-4.004 1.937 0 2.838 3.476 2.838 6.468 0 1.936-.616 4.004-2.178 4.004Zm11.98-11.44c-1.21 0-2.289 1.232-2.905 2.398h-.066V6.23l-.396-.33-1.496.616-1.76.704.22.506c1.32-.55 1.32-.242 1.32 1.232v6.776c0 1.408-.22 1.738-1.496 1.738V18h5.94v-.55c-2.002 0-2.332-.352-2.332-1.848V9.75c.462-1.342 1.056-2.068 1.562-2.068.264 0 .374.088.66.374.286.308.462.462.858.462.572 0 1.078-.55 1.078-1.408 0-.726-.418-1.166-1.188-1.166Zm8.569 0c-1.232 0-2.244.814-3.102 2.222h-.088V6.23l-.352-.33-3.3 1.298.198.506c1.32-.528 1.32-.22 1.32 1.254v11.616c0 1.43-.198 1.738-1.54 1.738v.528h5.236v-.528c-1.342 0-1.562-.308-1.562-1.738V16.68h.044c.594 1.056 1.606 1.584 2.64 1.584 2.398 0 3.784-2.926 3.784-6.534 0-3.388-1.056-5.786-3.278-5.786Zm-1.056 11.264c-1.166 0-2.134-1.518-2.134-3.982V9.222c.572-.968 1.386-1.76 2.288-1.76 1.276 0 1.87 1.65 1.87 4.598 0 2.684-.528 5.148-2.024 5.148Zm6.597 1.144a1.3 1.3 0 0 0 1.298-1.298c0-.704-.594-1.298-1.298-1.298a1.3 1.3 0 0 0-1.298 1.298c0 .726.572 1.298 1.298 1.298Z"
        />
      </svg>
    </Overlay>
  );
};

const Divider = () => {
  return <div className="h-1 bg-white opacity-60 mix-blend-overlay" />;
};

const Address = () => {
  return (
    <div className="flex">
      <div className="w-half pr-14 shrink-0" role="paragraph">
        <Overlay>
          Acme Software Co.
          <br />
          50 E Rio Grande Pkwy
          <br />
          Tempe, AZ 85281 United States
        </Overlay>
      </div>
      <div className="w-half pl-14 shrink-0" role="paragraph">
        <Overlay>
          Wasatch Cloud Inc.
          <br />
          18560 West Sunset Blvd.
          <br />
          LOS Angeles, CA 90046 US
        </Overlay>
      </div>
    </div>
  );
};

const Terms = () => {
  const contract = [
    { label: 'Contract Start Date:', value: '7/30/2022' },
    { label: 'Contract End Date:', value: '7/29/2023' },
  ];
  const billing = [
    { label: 'Billing Terms:', value: 'Net 45' },
    { label: 'Billing Frequency:', value: 'Annually' },
  ];

  return (
    <div>
      <div
        className="mb-14 text-11 font-medium leading-100 tracking-p4 opacity-90"
        role="heading"
        aria-level="4"
      >
        SUBSCRIPTION TERMS
      </div>
      <div className="flex">
        <div className="flex w-half pr-14 gap-16 shrink-0">
          <Overlay>
            <span aria-label={`${contract[0].label} ${contract[0].value}`}>
              {contract[0].label}
            </span>
            <br />
            <span aria-label={`${contract[1].label} ${contract[1].value}`}>
              {contract[1].label}
            </span>
          </Overlay>
          <div className="font-medium opacity-90" aria-hidden>
            {contract[0].value}
            <br />
            {contract[1].value}
          </div>
        </div>
        <div className="flex w-half pl-14 gap-16 shrink-0">
          <Overlay>
            <span aria-label={`${billing[0].label} ${billing[0].value}`}>{billing[0].label}</span>
            <br />
            <span aria-label={`${billing[1].label} ${billing[1].value}`}>{billing[1].label}</span>
          </Overlay>
          <div className="font-medium opacity-90" aria-hidden>
            {billing[0].value}
            <br />
            {billing[1].value}
          </div>
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  const rows = [
    ['SERVICES', 'QTY', 'ANNUAL PRICE'],
    ['Enterprise Subscription', 25, '$100,000'],
    ['Lite Access Users - Subscription', 350, '$35,000'],
    ['Sandbox - Test Tenants', 3, 'included'],
    ['Custom API Integrations', 2, '$20,000'],
    ['Enterprise API Integrations', 'all', 'included'],
    ['Delivery and Pro Services', 1, '$50,000'],
    ['Managed Services', 1, '$50,000'],
    ['Contract A1 Service', 800, '$50,000'],
    ['Sandbox - Test Tenants', 3, 'included'],
  ];

  return (
    <div
      className="relative rounded-4"
      role="table"
      aria-rowcount={rows.length}
      aria-colcount={3}
      aria-label="Acme Corp services table"
    >
      {/* border */}
      <div className="absolute -inset-1 border border-white rounded-4 mix-blend-overlay" />

      {/* rows */}
      {rows.map((row, i) => (
        <TableRow key={i} row={row} index={i} last={i === rows.length - 1} />
      ))}
    </div>
  );
};

const TableRow = ({ row, index, last }) => {
  const head = index === 0;
  const body = index > 0;
  const bodyOdd = body && index % 2 === 1;
  const bodyEven = body && index % 2 === 0;
  return (
    <div className="flex h-32 items-center relative" role="row">
      {/* background */}
      <div
        className={cx(
          'absolute inset-0 bg-white mix-blend-overlay',
          head && 'opacity-40 rounded-t-3',
          bodyOdd && 'opacity-20',
          bodyEven && 'hidden',
          last && 'rounded-b-3'
        )}
      />

      {/* cells */}
      {row.map((cell, i) => (
        <TableCell key={i} cell={cell} index={i} head={head} body={body} />
      ))}
    </div>
  );
};

const TableCell = ({ cell, index, head = false, body = false }) => {
  const cell1 = index === 0;
  const cell2 = index === 1;
  const cell3 = index === 2;
  const body1 = body && cell1;
  const body2 = body && cell2;
  const body3 = body && cell3;
  return (
    <div
      className={cx(
        'relative shrink-0 pl-14 last:pr-14',
        cell1 && 'w-[51.5%]',
        cell2 && 'grow',
        cell3 && 'w-[28%]',
        head && 'text-10 font-medium leading-100 tracking-p4',
        body1 && 'leading-100',
        body2 && 'leading-100 opacity-90',
        body3 && 'font-medium leading-100 opacity-90'
      )}
      role={head ? 'columnheader' : 'cell'}
    >
      {head ? (
        <Overlay>{cell}</Overlay>
      ) : body1 ? (
        <Overlay opacity2="opacity-90">{cell}</Overlay>
      ) : (
        cell
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-between items-center text-14 leading-100 tracking-0">
      <Overlay opacity1="opacity-70">
        <Signature />
      </Overlay>
      <div className="ml-auto">
        <Overlay>1-year Total:</Overlay>
      </div>
      <div className="w-[28%] pl-14 pr-14 tracking-n2 opacity-90">$255,000</div>
    </div>
  );
};

const Signature = () => {
  return (
    <svg width="128" height="38" fill="none" viewBox="0 0 128 38" title="Signature">
      <path
        className="stroke-white"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.198 37c10.225-5.593 25.09-24.638 28.134-30.472 2.707-5.186-4.772 8.597-8.098 23.126-.82 3.585 1.188 1.37-7.424-2.346-7.712-3.326-16.246-2.646-31.652.718-2.52.55 25.539-5.146 55.49-12.617C75.124 10.8 87.41 11.016 127 1M54.843 20.389c-1.895-4.354-7.643-1.215-8.146 4.346-.638 7.055 9.674.207 11.268-3.007.66-1.33 1.324-3.272-.409-3.073-4.227.486-5.653 10.022-1.085 8.524 3.999-1.312 9.34-6.09 8.99-8.072-.345-1.96-5.186 6.711-.778 5.99 4.408-.72 9.246-6.125 9.207-7.819-.039-1.693-5.119 3.45-2.465 5.703 1.756 1.491 8.353-3.467 9.514-4.825 2.338-2.733-.837-4.83-1.757 1.149-1.01 6.573 13.013-4.614 10.844-4.757-2.577-.17-3.15 7.337.257 5.64 3.396-1.69 7.955-5.601 7.239-6.55-.722-.956-3.423 1.658-1.24 4.834 2.643 3.846-.277 8.155-2.911 7.622-1.194-.241-3.088-1.825.431-4.848 4.636-3.982 9.752-8.733 10.712-8.31 0 0-2.172 2.07-2.95 3.781-.794 1.746.041 3.558 2.34 3 3.327-.808 4.216-2.747 4.016-4.317-.2-1.571-1.847-3.439-4.119-1.612"
      />
    </svg>
  );
};

const Mockup = () => {
  return (
    <div className="w-[410px] h-[605px] relative">
      {/* shadow */}
      <div className="absolute inset-[-60px] right-auto w-[120px] overflow-hidden">
        <div
          className={cx(
            'absolute top-[80px] left-[60px] w-0 h-full',
            'shadow-[0_20px_30px_3px_rgba(14,10,15,0.8)]'
          )}
        />
      </div>

      {/* card */}
      <div
        className={cx(
          'absolute inset-0 mix-blend-overlay',
          '[mask:linear-gradient(90deg,_#fff_0%,_transparent_18%)]'
        )}
      >
        {/* radial gradient */}
        <div
          className={cx(
            'absolute inset-0 rounded-3 opacity-80',
            'bg-[radial-gradient(100%_100%_at_0%_0%,_#fff_0%,_transparent_74%)]'
          )}
        />

        {/* noise */}
        <Image
          className={cx(
            'absolute inset-0 w-full h-full rounded-3 object-cover opacity-10 mix-blend-overlay',
            '[mask:radial-gradient(100%_100%_at_0%_0%,_rgba(255,255,255,0.8)_0%,_transparent_74%)]'
          )}
          src={noise.src}
          width={noise.width}
          height={noise.height}
          style={{ width: 'auto' }}
          alt=""
          priority
        />

        {/* gradient border */}
        <div
          className={cx(
            'absolute inset-0 rounded-3 opacity-60 mix-blend-overlay',
            'border-image-[linear-gradient(145deg,_#fff_0%,_#fff_22%,_transparent_69%)]'
          )}
        />
      </div>
    </div>
  );
};

const Overlay = ({ children, opacity1 = 'opacity-60', opacity2 = 'opacity-100' }) => {
  return (
    <div className="relative">
      <div className={`${opacity1} mix-blend-overlay`}>{children}</div>
      <div className={`absolute inset-0 ${opacity2} mix-blend-overlay`} aria-hidden>
        {children}
      </div>
    </div>
  );
};

export default HeroCard;
