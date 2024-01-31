import cx from 'clsx';
import Header from 'components/header';
import HeroBanner from 'components/hero-banner';
import HeroCard from 'components/hero-card';
import FeatureCard from 'components/feature-card';

const Page = () => {
  const features = [
    {
      value: '3x',
      title: 'Faster Analysis Cycles',
      description: `Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions.`,
    },
    {
      value: '10%+',
      title: 'Savings on Costs',
      description: `Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies.`,
    },
    {
      value: '30',
      title: 'Day Setup',
      description: `Implement swiftly with straightforward, no-code processes and ready-to-use integrations.`,
    },
  ];

  return (
    <div className="flex justify-center px-40">
      <div className="max-w-[1472px] w-full pb-[300px] relative">
        {/* bubble */}
        <div
          className={cx(
            'absolute left-0 -top-128 w-[630px] h-[630px] -z-10 blur-[200px]',
            'rounded-full bg-purple opacity-15 pointer-events-none'
          )}
        />

        {/* header */}
        <div className="h-64 mb-40">
          <Header />
        </div>

        <main>
          {/* hero */}
          <div
            className={cx(
              'flex items-center justify-between mb-64 pr-128 gap-60',
              'md:pr-64 sm:pr-0 sm:flex-col sm:pt-40 sm:gap-128 sm:w-full sm:max-w-[700px] sm:mx-auto'
            )}
          >
            <section className="max-w-[696px] shrink-0" aria-label="Proposition">
              <HeroBanner />
            </section>
            <section
              className="py-56 shrink-0 sm:py-0"
              aria-label="Summary of annual subscription services and fees for Acme Corp."
            >
              <HeroCard />
            </section>
          </div>

          {/* features */}
          <section
            className={cx(
              'flex justify-between pr-128',
              'md:pr-64 sm:flex-col sm:items-center sm:pt-40 sm:gap-80'
            )}
            aria-label="Service Features"
          >
            {features.map((card, i) => (
              <article className="w-[338px] h-[332px] sm:w-full sm:max-w-[400px]" key={i}>
                <FeatureCard value={card.value} title={card.title} description={card.description} />
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;
