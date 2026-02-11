import { useTranslation } from '../i18n';

export default function Legal() {
  const { t } = useTranslation();

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
      <span className="sticker border-starlight bg-starlight/10 text-cosmos">{'\u2696\uFE0F'} {t('legal.sticker')}</span>
      <h1 className="mt-4 font-display text-4xl text-cosmos">{t('legal.title')}</h1>
      <p className="mt-2 text-sm text-cosmos/60">{t('legal.lastUpdated')}</p>

      <div className="mt-8 space-y-8 text-cosmos/80 leading-relaxed">
        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('legal.s1.heading')}</h2>
          <dl className="mt-3 space-y-2">
            <div className="flex gap-2">
              <dt className="font-bold text-cosmos shrink-0">{t('legal.s1.nameLabel')}</dt>
              <dd>{t('legal.s1.name')}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-cosmos shrink-0">{t('legal.s1.representativeLabel')}</dt>
              <dd>{t('legal.s1.representative')}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-cosmos shrink-0">{t('legal.s1.addressLabel')}</dt>
              <dd>{t('legal.s1.address')}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-cosmos shrink-0">{t('legal.s1.phoneLabel')}</dt>
              <dd>{t('legal.s1.phone')}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-bold text-cosmos shrink-0">{t('legal.s1.emailLabel')}</dt>
              <dd className="font-semibold">{t('legal.s1.email')}</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('legal.s2.heading')}</h2>
          <p className="mt-2">{t('legal.s2.body')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('legal.s3.heading')}</h2>
          {t('legal.s3.body') && t('legal.s3.body') !== 'legal.s3.body' ? (
            <p className="mt-2">{t('legal.s3.body')}</p>
          ) : (
            <ul className="mt-2 ml-6 list-disc space-y-1.5">
              <li>{t('legal.s3.items.0')}</li>
              <li>{t('legal.s3.items.1')}</li>
              <li>{t('legal.s3.items.2')}</li>
            </ul>
          )}
        </section>

        {t('legal.s_extra', { returnObjects: true })?.heading && (
          <section>
            <h2 className="font-display text-2xl text-cosmos">{t('legal.s_extra.heading')}</h2>
            <p className="mt-2">{t('legal.s_extra.body')}</p>
          </section>
        )}

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('legal.s4.heading')}</h2>
          <p className="mt-2">{t('legal.s4.body')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('legal.s5.heading')}</h2>
          <p className="mt-2">{t('legal.s5.body')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('legal.s6.heading')}</h2>
          <p className="mt-2">{t('legal.s6.body')}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('legal.s7.heading')}</h2>
          {t('legal.s7.body') && t('legal.s7.body') !== 'legal.s7.body' ? (
            <p className="mt-2">{t('legal.s7.body')}</p>
          ) : (
            <ul className="mt-2 ml-6 list-disc space-y-1.5">
              <li>{t('legal.s7.items.0')}</li>
              <li>{t('legal.s7.items.1')}</li>
              <li>{t('legal.s7.items.2')}</li>
              <li>{t('legal.s7.items.3')}</li>
            </ul>
          )}
        </section>

        <section>
          <h2 className="font-display text-2xl text-cosmos">{t('legal.s8.heading')}</h2>
          <p className="mt-2">{t('legal.s8.body')}</p>
        </section>
      </div>
    </article>
  );
}
