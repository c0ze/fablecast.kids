import { useTranslation } from '../i18n';

const phases = [
    { id: 1, start: 1, end: 6, key: '1' },
    { id: 2, start: 7, end: 12, key: '2' },
    { id: 3, start: 13, end: 24, key: '3' },
    { id: 4, start: 25, end: 36, key: '4' },
    { id: 5, start: 37, end: 60, key: '5' },
    { id: 6, start: 61, end: null, key: '6', isFree: true }
];

export default function Pricing() {
    const { t } = useTranslation();

    return (
        <article className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
            <div className="text-center">
                <span className="sticker border-starlight bg-starlight/10 text-cosmos">
                    {'\uD83D\uDC8E'} {t('pricing.sticker')}
                </span>
                <h1 className="mt-4 font-display text-4xl text-cosmos">{t('pricing.title')}</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-cosmos/70">{t('pricing.subtitle')}</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
                {/* Diminishing Plan Card */}
                <div className="rounded-[2rem] border-2 border-dashed border-starlight/40 bg-white/80 p-8">
                    <span className="text-3xl">{'\uD83D\uDCC9'}</span>
                    <h2 className="mt-3 font-display text-2xl text-cosmos">{t('pricing.monthlyTitle')}</h2>

                    <div className="mt-6 space-y-3">
                        {phases.map((phase) => (
                            <div
                                key={phase.id}
                                className={`flex items-center justify-between rounded-xl border-2 p-3 ${
                                    phase.isFree
                                        ? 'border-mint bg-mint/10'
                                        : 'border-dashed border-starlight/20'
                                }`}
                            >
                                <div>
                                    <p className="text-sm font-bold text-cosmos/60">
                                        {t('pricing.phase', { number: phase.id })}
                                    </p>
                                    <p className="text-xs text-cosmos/40">
                                        {phase.isFree
                                            ? t('pricing.forever')
                                            : t('pricing.months', { start: phase.start, end: phase.end })}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className={`font-display text-xl ${phase.isFree ? 'text-mint' : 'text-cosmos'}`}>
                                        {t(`pricing.phases.${phase.key}.price`)}
                                    </span>
                                    {!phase.isFree && (
                                        <span className="text-xs text-cosmos/40">{t('pricing.month')}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-center text-sm italic text-cosmos/50">
                        * {t('pricing.phases.6.desc')}
                    </p>
                </div>

                {/* Lifetime Plan Card */}
                <div className="flex flex-col justify-center rounded-[2rem] border-2 border-dashed border-candy/40 bg-gradient-to-br from-candy/5 to-starlight/10 p-8 text-center">
                    <span className="sticker border-candy bg-candy/10 text-cosmos">
                        {t('pricing.lifetime.label')}
                    </span>
                    <h2 className="mt-4 font-display text-3xl text-cosmos">{t('pricing.lifetimeTitle')}</h2>
                    <p className="mt-2 text-cosmos/70">{t('pricing.lifetimeSubtitle')}</p>

                    <p className="mt-8 font-display text-6xl text-cosmos">{t('pricing.lifetime.price')}</p>
                    <p className="mt-2 font-bold text-cosmos/40">{t('pricing.oneTime')}</p>

                    <div className="mx-auto mt-6 inline-block rounded-full bg-mint/20 px-4 py-2 text-sm font-bold text-cosmos">
                        {t('pricing.savings', { amount: '$38+' })}
                    </div>

                    <button className="mt-8 w-full rounded-full bg-twilight px-4 py-4 text-lg font-bold text-white shadow-glow transition hover:bg-plumMist hover:shadow-candy">
                        {t('pricing.lifetime.cta')}
                    </button>
                </div>
            </div>
        </article>
    );
}
