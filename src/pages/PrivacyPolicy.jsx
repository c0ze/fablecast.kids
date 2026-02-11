import { useTranslation } from '../i18n';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
      <span className="sticker border-lavender bg-lavender/10 text-cosmos">{'\uD83D\uDD12'} {t('privacy.sticker')}</span>
      <h1 className="mt-4 font-display text-4xl text-cosmos">{t('privacy.title')}</h1>
      <p className="mt-2 text-sm text-cosmos/60">{t('privacy.lastUpdated')}</p>

      <div className="mt-8 space-y-8 text-cosmos/80 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s1.heading')}</h2>
          <p className="mt-2">
            {t('privacy.s1.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s2.heading')}</h2>
          <p className="mt-2">
            {t('privacy.s2.intro')}
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-1.5">
            <li>{t('privacy.s2.items.0')}</li>
            <li>{t('privacy.s2.items.1')}</li>
            <li>{t('privacy.s2.items.2')}</li>
          </ul>
          <p className="mt-3">
            {t('privacy.s2.noOtherData')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s3.heading')}</h2>
          <p className="mt-2">{t('privacy.s3.intro')}</p>
          <ul className="mt-3 ml-6 list-disc space-y-1.5">
            <li>{t('privacy.s3.items.0')}</li>
            <li>{t('privacy.s3.items.1')}</li>
            <li>{t('privacy.s3.items.2')}</li>
          </ul>
          <p className="mt-3">
            {t('privacy.s3.neverUsedFor')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s4.heading')}</h2>
          <p className="mt-2">
            {t('privacy.s4.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s5.heading')}</h2>
          <p className="mt-2">{t('privacy.s5.intro')}</p>
          <ul className="mt-3 ml-6 list-disc space-y-1.5">
            <li>{t('privacy.s5.items.0')}</li>
            <li>{t('privacy.s5.items.1')}</li>
          </ul>
          <p className="mt-3">{t('privacy.s5.noOtherThirdParties')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s6.heading')}</h2>
          <p className="mt-2">
            {t('privacy.s6.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s7.heading')}</h2>
          <p className="mt-2">
            {t('privacy.s7.body1')}
          </p>
          <p className="mt-2">
            {t('privacy.s7.body2')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s8.heading')}</h2>
          <p className="mt-2">{t('privacy.s8.intro')}</p>

          <h3 className="mt-4 font-display text-lg text-cosmos">{t('privacy.s8.allUsers.heading')}</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('privacy.s8.allUsers.items.0')}</li>
            <li>{t('privacy.s8.allUsers.items.1')}</li>
            <li>{t('privacy.s8.allUsers.items.2')}</li>
          </ul>

          <h3 className="mt-4 font-display text-lg text-cosmos">{t('privacy.s8.euEea.heading')}</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('privacy.s8.euEea.items.0')}</li>
            <li>{t('privacy.s8.euEea.items.1')}</li>
            <li>{t('privacy.s8.euEea.items.2')}</li>
            <li>{t('privacy.s8.euEea.items.3')}</li>
          </ul>
          <p className="mt-2">
            {t('privacy.s8.euEea.legalBasis')}
          </p>

          <h3 className="mt-4 font-display text-lg text-cosmos">{t('privacy.s8.japan.heading')}</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('privacy.s8.japan.items.0')}</li>
            <li>{t('privacy.s8.japan.items.1')}</li>
            <li>{t('privacy.s8.japan.items.2')}</li>
          </ul>

          <h3 className="mt-4 font-display text-lg text-cosmos">{t('privacy.s8.us.heading')}</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1.5">
            <li>{t('privacy.s8.us.items.0')}</li>
            <li>{t('privacy.s8.us.items.1')}</li>
            <li>{t('privacy.s8.us.items.2')}</li>
            <li>{t('privacy.s8.us.items.3')}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s9.heading')}</h2>
          <p className="mt-2">
            {t('privacy.s9.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s10.heading')}</h2>
          <p className="mt-2">
            {t('privacy.s10.body')}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('privacy.s11.heading')}</h2>
          <p className="mt-2">
            {t('privacy.s11.body')}
          </p>
          <p className="mt-2 font-semibold">{t('privacy.s11.email')}</p>
        </section>
      </div>
    </article>
  );
}
