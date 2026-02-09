import { useTranslation } from '../i18n';

export default function About() {
  const { t } = useTranslation();

  const steps = [
    {
      emoji: '\uD83D\uDCD6',
      title: t('about.steps.0.title'),
      description: t('about.steps.0.description'),
      color: 'from-lavender/20 to-candy/10'
    },
    {
      emoji: '\u270D\uFE0F',
      title: t('about.steps.1.title'),
      description: t('about.steps.1.description'),
      color: 'from-peach/20 to-starlight/10'
    },
    {
      emoji: '\uD83C\uDFA8',
      title: t('about.steps.2.title'),
      description: t('about.steps.2.description'),
      color: 'from-sky/20 to-mint/10'
    },
    {
      emoji: '\uD83C\uDF0D',
      title: t('about.steps.3.title'),
      description: t('about.steps.3.description'),
      color: 'from-mint/20 to-sky/10'
    },
    {
      emoji: '\uD83D\uDD0A',
      title: t('about.steps.4.title'),
      description: t('about.steps.4.description'),
      color: 'from-candy/20 to-lavender/10'
    },
    {
      emoji: '\uD83D\uDCE6',
      title: t('about.steps.5.title'),
      description: t('about.steps.5.description'),
      color: 'from-starlight/20 to-peach/10'
    }
  ];

  return (
    <article className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
      <div className="text-center">
        <span className="sticker border-mint bg-mint/10 text-cosmos">{'\u2728'} {t('about.sticker')}</span>
        <h1 className="mt-4 font-display text-4xl text-cosmos sm:text-5xl">{t('about.title')}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-cosmos/70">
          {t('about.subtitle')}
        </p>
      </div>

      <div className="mt-14 space-y-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`card-cute flex gap-5 rounded-2xl border-2 border-dashed border-plumMist/15 bg-gradient-to-r ${step.color} p-6`}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-soft">
              {step.emoji}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-twilight">
                {t('about.stepLabel', { number: index + 1 })}
              </p>
              <h2 className="mt-1 font-display text-2xl text-cosmos">{step.title}</h2>
              <p className="mt-2 leading-relaxed text-cosmos/75">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border-2 border-dashed border-starlight/30 bg-gradient-to-br from-starlight/10 to-peach/10 p-8 text-center">
        <span className="text-4xl">{'\uD83D\uDEE1\uFE0F'}</span>
        <h2 className="mt-3 font-display text-2xl text-cosmos">{t('about.safetyTitle')}</h2>
        <p className="mx-auto mt-3 max-w-xl text-cosmos/70">
          {t('about.safetyDescription')}
        </p>
      </div>

      <div className="mt-10 rounded-[2rem] border-2 border-dashed border-candy/30 bg-gradient-to-br from-candy/10 to-lavender/10 p-8 text-center">
        <span className="text-4xl">{'\uD83D\uDEB7'}</span>
        <h2 className="mt-3 font-display text-2xl text-cosmos">{t('about.adFreeTitle')}</h2>
        <p className="mx-auto mt-3 max-w-xl text-cosmos/70">
          {t('about.adFreeDescription')}
        </p>
      </div>
    </article>
  );
}
