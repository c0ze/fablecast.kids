import { useTranslation } from '../i18n';

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
      <span className="sticker border-sky bg-sky/10 text-cosmos">{'\uD83D\uDCDC'} {t('terms.sticker')}</span>
      <h1 className="mt-4 font-display text-4xl text-cosmos">{t('terms.title')}</h1>
      <p className="mt-2 text-sm text-cosmos/60">{t('terms.lastUpdated')}</p>

      <div className="mt-8 space-y-8 text-cosmos/80 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s1.heading')}</h2>
          <p className="mt-2">
            {t('terms.s1.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s2.heading')}</h2>
          <p className="mt-2">
            {t('terms.s2.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s3.heading')}</h2>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('terms.s3.items.0')}</li>
            <li>{t('terms.s3.items.1')}</li>
            <li>{t('terms.s3.items.2')}</li>
            <li>{t('terms.s3.items.3')}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s4.heading')}</h2>

          <h3 className="mt-4 font-display text-lg text-cosmos">{t('terms.s4.plans.subheading')}</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('terms.s4.plans.items.0')}</li>
            <li>{t('terms.s4.plans.items.1')}</li>
            <li>{t('terms.s4.plans.items.2')}</li>
            <li>{t('terms.s4.plans.items.3')}</li>
          </ul>

          <h3 className="mt-4 font-display text-lg text-cosmos">{t('terms.s4.billing.subheading')}</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('terms.s4.billing.items.0')}</li>
            <li>{t('terms.s4.billing.items.1')}</li>
            <li>{t('terms.s4.billing.items.2')}</li>
          </ul>

          <h3 className="mt-4 font-display text-lg text-cosmos">{t('terms.s4.refunds.subheading')}</h3>
          <p className="mt-2">
            {t('terms.s4.refunds.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s5.heading')}</h2>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('terms.s5.items.0')}</li>
            <li>{t('terms.s5.items.1')}</li>
            <li>{t('terms.s5.items.2')}</li>
            <li>{t('terms.s5.items.3')}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s6.heading')}</h2>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('terms.s6.items.0')}</li>
            <li>{t('terms.s6.items.1')}</li>
            <li>{t('terms.s6.items.2')}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s7.heading')}</h2>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('terms.s7.items.0')}</li>
            <li>{t('terms.s7.items.1')}</li>
            <li>{t('terms.s7.items.2')}</li>
            <li>{t('terms.s7.items.3')}</li>
            <li>{t('terms.s7.items.4')}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s8.heading')}</h2>
          <p className="mt-2">{t('terms.s8.intro')}</p>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('terms.s8.items.0')}</li>
            <li>{t('terms.s8.items.1')}</li>
            <li>{t('terms.s8.items.2')}</li>
            <li>{t('terms.s8.items.3')}</li>
            <li>{t('terms.s8.items.4')}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s9.heading')}</h2>
          <p className="mt-2">
            {t('terms.s9.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s10.heading')}</h2>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('terms.s10.items.0')}</li>
            <li>{t('terms.s10.items.1')}</li>
            <li>{t('terms.s10.items.2')}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s11.heading')}</h2>
          <p className="mt-2">
            {t('terms.s11.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s12.heading')}</h2>
          <p className="mt-2">
            {t('terms.s12.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s13.heading')}</h2>
          <p className="mt-2">
            {t('terms.s13.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s14.heading')}</h2>
          <p className="mt-2">
            {t('terms.s14.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('terms.s15.heading')}</h2>
          <p className="mt-2">
            {t('terms.s15.body')}
          </p>
          <p className="mt-2 font-semibold">{t('terms.s15.email')}</p>
        </section>
      </div>
    </article>
  );
}
