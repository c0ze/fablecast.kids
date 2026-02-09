import { useState } from 'react';
import { useTranslation } from '../i18n';

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dashed border-plumMist/15 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left transition hover:text-twilight"
      >
        <span className="font-semibold text-cosmos">{item.q}</span>
        <span
          className={`shrink-0 text-lg text-twilight transition-transform ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-4 pr-8 text-sm leading-relaxed text-cosmos/75">{item.a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      category: t('faq.gettingStarted.category'),
      emoji: '\uD83D\uDE80',
      items: [
        { q: t('faq.gettingStarted.0.q'), a: t('faq.gettingStarted.0.a') },
        { q: t('faq.gettingStarted.1.q'), a: t('faq.gettingStarted.1.a') },
        { q: t('faq.gettingStarted.2.q'), a: t('faq.gettingStarted.2.a') },
        { q: t('faq.gettingStarted.3.q'), a: t('faq.gettingStarted.3.a') }
      ]
    },
    {
      category: t('faq.storiesAndContent.category'),
      emoji: '\uD83D\uDCDA',
      items: [
        { q: t('faq.storiesAndContent.0.q'), a: t('faq.storiesAndContent.0.a') },
        { q: t('faq.storiesAndContent.1.q'), a: t('faq.storiesAndContent.1.a') },
        { q: t('faq.storiesAndContent.2.q'), a: t('faq.storiesAndContent.2.a') },
        { q: t('faq.storiesAndContent.3.q'), a: t('faq.storiesAndContent.3.a') },
        { q: t('faq.storiesAndContent.4.q'), a: t('faq.storiesAndContent.4.a') }
      ]
    },
    {
      category: t('faq.subscriptionAndBilling.category'),
      emoji: '\uD83D\uDCB3',
      items: [
        { q: t('faq.subscriptionAndBilling.0.q'), a: t('faq.subscriptionAndBilling.0.a') },
        { q: t('faq.subscriptionAndBilling.1.q'), a: t('faq.subscriptionAndBilling.1.a') },
        { q: t('faq.subscriptionAndBilling.2.q'), a: t('faq.subscriptionAndBilling.2.a') },
        { q: t('faq.subscriptionAndBilling.3.q'), a: t('faq.subscriptionAndBilling.3.a') }
      ]
    },
    {
      category: t('faq.technical.category'),
      emoji: '\u2699\uFE0F',
      items: [
        { q: t('faq.technical.0.q'), a: t('faq.technical.0.a') },
        { q: t('faq.technical.1.q'), a: t('faq.technical.1.a') },
        { q: t('faq.technical.2.q'), a: t('faq.technical.2.a') }
      ]
    },
    {
      category: t('faq.privacyAndSafety.category'),
      emoji: '\uD83D\uDD12',
      items: [
        { q: t('faq.privacyAndSafety.0.q'), a: t('faq.privacyAndSafety.0.a') },
        { q: t('faq.privacyAndSafety.1.q'), a: t('faq.privacyAndSafety.1.a') },
        { q: t('faq.privacyAndSafety.2.q'), a: t('faq.privacyAndSafety.2.a') }
      ]
    }
  ];

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
      <div className="text-center">
        <span className="sticker border-starlight bg-starlight/10 text-cosmos">{'\u2753'} {t('faq.sticker')}</span>
        <h1 className="mt-4 font-display text-4xl text-cosmos">{t('faq.title')}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cosmos/70">
          {t('faq.subtitle')}
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="flex items-center gap-2 font-display text-2xl text-cosmos">
              <span>{section.emoji}</span>
              {section.category}
            </h2>
            <div className="mt-4 rounded-2xl border-2 border-dashed border-plumMist/15 bg-white/60 px-5">
              {section.items.map((item) => (
                <FAQItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border-2 border-dashed border-lavender/30 bg-gradient-to-br from-lavender/10 to-sky/10 p-8 text-center">
        <span className="text-4xl">{'\uD83D\uDCEC'}</span>
        <h2 className="mt-3 font-display text-2xl text-cosmos">{t('faq.contactTitle')}</h2>
        <p className="mx-auto mt-3 max-w-md text-cosmos/70">
          {t('faq.contactSubtitle')}
        </p>
        <p className="mt-3 font-semibold text-twilight">{t('faq.contactEmail')}</p>
      </div>
    </article>
  );
}
