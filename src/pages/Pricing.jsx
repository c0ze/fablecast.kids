import React from 'react';
import { useTranslation } from '../i18n';
import Logo from '../Logo';

function Pricing() {
    const { t } = useTranslation();

    const phases = [
        { id: 1, start: 1, end: 6, key: '1' },
        { id: 2, start: 7, end: 12, key: '2' },
        { id: 3, start: 13, end: 24, key: '3' },
        { id: 4, start: 25, end: 36, key: '4' },
        { id: 5, start: 37, end: 60, key: '5' },
        { id: 6, start: 61, end: null, key: '6', isFree: true }
    ];

    return (
        <div className="min-h-screen bg-page text-cosmos">
            <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8">

                <div className="text-center mb-12">
                    <h1 className="font-display text-4xl text-cosmos mb-4">{t('pricing.title')}</h1>
                    <p className="text-xl text-cosmos/70 max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Diminishing Plan Card */}
                    <div className="rounded-[2rem] border-2 border-dashed border-starlight/40 bg-white p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="text-9xl">📉</span>
                        </div>
                        <h2 className="font-display text-2xl mb-6 relative z-10">Monthly Subscription</h2>

                        <div className="space-y-4 relative z-10">
                            {phases.map((phase) => (
                                <div key={phase.id} className={`flex items-center justify-between p-3 rounded-xl border-2 ${phase.isFree ? 'border-mint bg-mint/10' : 'border-dashed border-starlight/20'}`}>
                                    <div>
                                        <p className="font-bold text-sm text-cosmos/60">
                                            {t('pricing.phase', { number: phase.id })}
                                        </p>
                                        <p className="text-xs text-cosmos/40">
                                            {phase.isFree ? t('pricing.forever') : t('pricing.months', { start: phase.start, end: phase.end })}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className={`font-display text-xl ${phase.isFree ? 'text-mint' : 'text-cosmos'}`}>
                                            {t(`pricing.phases.${phase.key}.price`)}
                                        </span>
                                        {!phase.isFree && <span className="text-xs text-cosmos/40">{t('pricing.month')}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-center text-sm text-cosmos/50 italic">
                            * {t('pricing.phases.6.desc')}
                        </p>
                    </div>

                    {/* Lifetime Plan Card */}
                    <div className="rounded-[2rem] border-2 border-dashed border-candy/40 bg-gradient-to-br from-candy/5 to-starlight/10 p-8 flex flex-col justify-center text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 p-4 opacity-10">
                            <span className="text-9xl">💎</span>
                        </div>

                        <div className="relative z-10">
                            <span className="sticker border-candy bg-candy/10 text-cosmos mb-6 inline-block">
                                {t('pricing.lifetime.label')}
                            </span>
                            <h2 className="font-display text-3xl mb-2">{t('pricing.lifetimeTitle')}</h2>
                            <p className="text-cosmos/70 mb-8">{t('pricing.lifetimeSubtitle')}</p>

                            <div className="mb-8">
                                <span className="font-display text-6xl text-cosmos">{t('pricing.lifetime.price')}</span>
                                <span className="block text-cosmos/40 font-bold mt-2">{t('pricing.oneTime')}</span>
                            </div>

                            <div className="bg-mint/20 text-mint-dark font-bold text-sm py-2 px-4 rounded-full inline-block mb-8">
                                {t('pricing.savings', { amount: "$38+" })}
                            </div>

                            <button className="w-full rounded-full bg-cosmos text-white py-4 font-bold text-lg shadow-lg hover:bg-cosmos/90 transition transform hover:-translate-y-1">
                                {t('pricing.lifetime.cta')}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => window.history.back()} className="text-cosmos/40 hover:text-cosmos font-bold transition">
                        ← {t('pricing.back')}
                    </button>
                </div>

            </main>
        </div>
    );
}

export default Pricing;
