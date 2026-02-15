import { useMemo, useState } from 'react';
import { useTranslation } from '../i18n';

function formatSeedDate(seed) {
    if (!seed || String(seed).length < 8) return '';
    const raw = String(seed);
    const year = Number(raw.slice(0, 4));
    const month = Number(raw.slice(4, 6)) - 1;
    const day = Number(raw.slice(6, 8));
    if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return raw;
    return new Date(year, month, day).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

const seriesEmoji = {
    'adventures-of-rusty': { icon: '\uD83D\uDC36', color: 'bg-peach', border: 'border-peach' },
    'captain-barnacles-voyages': { icon: '\u2693', color: 'bg-sky', border: 'border-sky' },
    'astro-bun-to-the-moon': { icon: '\uD83D\uDC30', color: 'bg-lavender', border: 'border-lavender' },
    'pippa-the-little-plane': { icon: '\u2708\uFE0F', color: 'bg-mint', border: 'border-mint' },
    'professor-hoot-mysteries': { icon: '\uD83E\uDD89', color: 'bg-starlight', border: 'border-starlight' },
    'grug-garden': { icon: '\uD83C\uDF31', color: 'bg-candy', border: 'border-candy' }
};

const LANG_META = {
    en: { flag: '🇺🇸', key: 'english' },
    tr: { flag: '🇹🇷', key: 'turkish' },
    ja: { flag: '🇯🇵', key: 'japanese' },
    es: { flag: '🇪🇸', key: 'spanish' },
    pt: { flag: '🇧🇷', key: 'portuguese' },
    de: { flag: '🇩🇪', key: 'german' },
    fr: { flag: '🇫🇷', key: 'french' }
};

export default function FreeBooks({ stories = [] }) {
    const { t } = useTranslation();
    const [filterLang, setFilterLang] = useState('');
    const [filterSeries, setFilterSeries] = useState('');

    const langOptions = useMemo(() =>
        [...new Set(stories.map(s => s.lang).filter(Boolean))].sort(),
        [stories]
    );

    const seriesOptions = useMemo(() =>
        [...new Set(stories.map(s => s.series_slug).filter(Boolean))].sort(),
        [stories]
    );

    const filteredStories = useMemo(() => {
        return stories.filter(story => {
            if (story.access_tier !== 'free') return false;
            if (filterLang && story.lang !== filterLang) return false;
            if (filterSeries && story.series_slug !== filterSeries) return false;
            return true;
        });
    }, [stories, filterLang, filterSeries]);

    const handleRead = (url) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <article className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
            <div className="text-center">
                <span className="sticker border-mint bg-mint/10 text-cosmos">
                    {'\uD83D\uDCDA'} {t('freeBooks.sticker')}
                </span>
                <h1 className="mt-4 font-display text-4xl text-cosmos">{t('freeBooks.title')}</h1>
                <p className="mx-auto mt-4 max-w-xl text-lg text-cosmos/70">
                    {t('freeBooks.subtitle')}
                </p>
            </div>

            {/* Filters */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
                <div className="rounded-xl border border-white/70 bg-white/80 p-3">
                    <label htmlFor="lang-filter" className="mb-1 block text-xs font-bold uppercase tracking-wide text-cosmos/60">
                        {t('freeBooks.filterLanguage')}
                    </label>
                    <select
                        id="lang-filter"
                        value={filterLang}
                        onChange={(e) => setFilterLang(e.target.value)}
                        className="w-full rounded-lg border border-twilight/20 bg-white px-2 py-2 text-sm text-cosmos"
                    >
                        <option value="">{t('freeBooks.allLanguages')}</option>
                        {langOptions.map(l => {
                            const meta = LANG_META[l];
                            const label = meta
                                ? `${meta.flag} ${t(`auth.languageOptions.${meta.key}`)}`
                                : l.toUpperCase();
                            return <option key={l} value={l}>{label}</option>;
                        })}
                    </select>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/80 p-3">
                    <label htmlFor="series-filter" className="mb-1 block text-xs font-bold uppercase tracking-wide text-cosmos/60">
                        {t('freeBooks.filterSeries')}
                    </label>
                    <select
                        id="series-filter"
                        value={filterSeries}
                        onChange={(e) => setFilterSeries(e.target.value)}
                        className="w-full rounded-lg border border-twilight/20 bg-white px-2 py-2 text-sm text-cosmos"
                    >
                        <option value="">{t('freeBooks.allSeries')}</option>
                        {seriesOptions.map(s => {
                            const emoji = seriesEmoji[s];
                            const name = t(`characters.series.${s}.series`);
                            const icon = emoji ? `${emoji.icon} ` : '';
                            return <option key={s} value={s}>{icon}{name}</option>;
                        })}
                    </select>
                </div>
            </div>

            {filteredStories.length === 0 ? (
                <div className="mt-10 rounded-[2rem] border-2 border-dashed border-cosmos/10 bg-cosmos/5 py-20 text-center">
                    <p className="text-lg text-cosmos/60">{t('freeBooks.noBooks')}</p>
                </div>
            ) : (
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredStories.map((story) => {
                        const emoji = seriesEmoji[story.series_slug] || { icon: '\uD83D\uDCD6', color: 'bg-white', border: 'border-white' };

                        return (
                            <div
                                key={`${story.series_slug}-${story.timestamp}-${story.lang}`}
                                className={`card-cute flex flex-col rounded-2xl border-2 border-dashed ${emoji.border}/30 ${emoji.color}/10 p-5 transition hover:-translate-y-1 hover:shadow-soft`}
                            >
                                <div className="relative mb-4 aspect-[3/2] w-full overflow-hidden rounded-xl bg-white shadow-sm">
                                    {story.cover_url ? (
                                        <img
                                            src={story.cover_url}
                                            alt={story.title}
                                            className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center text-4xl">
                                            {emoji.icon}
                                        </div>
                                    )}
                                    <div className="absolute top-2 right-2 rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-cosmos shadow-sm backdrop-blur-sm">
                                        {LANG_META[story.lang]
                                            ? `${LANG_META[story.lang].flag} ${t(`auth.languageOptions.${LANG_META[story.lang].key}`)}`
                                            : story.lang.toUpperCase()}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-sm">{emoji.icon}</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-twilight/80">
                                            {t(`characters.series.${story.series_slug}.series`)}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl leading-tight text-cosmos mb-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-xs text-cosmos/60">
                                        {formatSeedDate(story.timestamp)}
                                    </p>
                                </div>

                                <button
                                    onClick={() => handleRead(story.index_url)}
                                    className="mt-5 w-full rounded-full bg-twilight px-4 py-3 text-sm font-bold text-white shadow-candy transition hover:bg-plumMist hover:shadow-glow"
                                >
                                    {t('freeBooks.readButton')} {'\u2728'}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </article>
    );
}
