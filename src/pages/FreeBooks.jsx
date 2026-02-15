import { useMemo, useState, useRef, useEffect } from 'react';
import { useTranslation } from '../i18n';
import { LANGUAGES, Flag, getLanguage } from '../utils/languages';

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
    'adventures-of-rusty': { icon: '🐶', color: 'bg-peach', border: 'border-peach' },
    'captain-barnacles-voyages': { icon: '⚓', color: 'bg-sky', border: 'border-sky' },
    'astro-bun-to-the-moon': { icon: '🐰', color: 'bg-lavender', border: 'border-lavender' },
    'pippa-the-little-plane': { icon: '✈️', color: 'bg-mint', border: 'border-mint' },
    'professor-hoot-mysteries': { icon: '🦉', color: 'bg-starlight', border: 'border-starlight' },
    'grug-garden': { icon: '🌱', color: 'bg-candy', border: 'border-candy' }
};

function CustomDropdown({ options, value, onChange, placeholder, size = "md" }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(o => o.value === value) || options[0];

    return (
        <div className="relative w-full" ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-lg border border-twilight/20 bg-white px-3 py-2 text-sm text-cosmos hover:border-twilight/40 focus:border-twilight focus:ring-1 focus:ring-twilight/30"
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    {selectedOption.icon}
                    <span className="truncate">{selectedOption.label}</span>
                </div>
                <span className="ml-2 text-xs text-cosmos/40">▼</span>
            </button>

            {isOpen && (
                <div className="absolute left-0 right-0 z-10 mt-1 max-h-60 overflow-auto rounded-xl border border-twilight/20 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1">
                        {options.map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => {
                                    onChange(opt.value);
                                    setIsOpen(false);
                                }}
                                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${value === opt.value
                                    ? 'bg-twilight/10 text-twilight font-bold'
                                    : 'text-cosmos/80 hover:bg-twilight/5 hover:text-cosmos'
                                    }`}
                            >
                                {opt.icon}
                                <span className="truncate">{opt.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function FreeBooks({ stories = [] }) {
    const { t } = useTranslation();
    const [filterLang, setFilterLang] = useState('');
    const [filterSeries, setFilterSeries] = useState('');

    const availableLangs = useMemo(() =>
        [...new Set(stories.map(s => s.lang).filter(Boolean))].sort(),
        [stories]
    );

    const langOptions = useMemo(() => {
        const allOption = {
            value: '',
            label: t('freeBooks.allLanguages'),
            icon: <Flag country="un" size={20} className="shrink-0" />
        };

        const list = availableLangs.map(code => {
            const l = getLanguage(code);
            const label = t(`setupModal.languageOptions.${l.key}`) || l.label;
            return {
                value: code,
                label: label,
                icon: <Flag country={l.country} size={20} className="shrink-0" />
            };
        });

        return [allOption, ...list];

    }, [availableLangs, t]);

    const seriesOptions = useMemo(() => {
        const allOption = { value: '', label: t('freeBooks.allSeries'), icon: null };

        const list = [...new Set(stories.map(s => s.series_slug).filter(Boolean))].sort().map(s => {
            const emoji = seriesEmoji[s];
            const name = t(`characters.series.${s}.series`);
            return {
                value: s,
                label: name,
                icon: emoji ? <span className="text-base">{emoji.icon}</span> : null
            };
        });

        return [allOption, ...list];
    }, [stories, t]);


    const filteredStories = useMemo(() => {
        return stories.filter(story => {
            if (story.access_tier !== 'free') return false;
            // Filter by lang code, ignoring case just in case
            if (filterLang && story.lang.toLowerCase() !== filterLang.toLowerCase()) return false;
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
                    📚 {t('freeBooks.sticker')}
                </span>
                <h1 className="mt-4 font-display text-4xl text-cosmos">{t('freeBooks.title')}</h1>
                <p className="mx-auto mt-4 max-w-xl text-lg text-cosmos/70">
                    {t('freeBooks.subtitle')}
                </p>
            </div>

            {/* Filters */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
                <div className="w-64 rounded-xl border border-white/70 bg-white/80 p-3">
                    <label htmlFor="lang-filter" className="mb-1 block text-xs font-bold uppercase tracking-wide text-cosmos/60">
                        {t('freeBooks.filterLanguage')}
                    </label>
                    <CustomDropdown
                        options={langOptions}
                        value={filterLang}
                        onChange={setFilterLang}
                    />
                </div>
                <div className="w-64 rounded-xl border border-white/70 bg-white/80 p-3">
                    <label htmlFor="series-filter" className="mb-1 block text-xs font-bold uppercase tracking-wide text-cosmos/60">
                        {t('freeBooks.filterSeries')}
                    </label>
                    <CustomDropdown
                        options={seriesOptions}
                        value={filterSeries}
                        onChange={setFilterSeries}
                    />
                </div>
            </div>

            {filteredStories.length === 0 ? (
                <div className="mt-10 rounded-[2rem] border-2 border-dashed border-cosmos/10 bg-cosmos/5 py-20 text-center">
                    <p className="text-lg text-cosmos/60">{t('freeBooks.noBooks')}</p>
                </div>
            ) : (
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredStories.map((story) => {
                        const emoji = seriesEmoji[story.series_slug] || { icon: '📖', color: 'bg-white', border: 'border-white' };
                        const langData = getLanguage(story.lang);

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
                                    <div className="absolute top-2 right-2 flex items-center gap-1.5 rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-cosmos shadow-sm backdrop-blur-sm">
                                        <Flag country={langData.country} size={16} />
                                        <span>
                                            {t(`setupModal.languageOptions.${langData.key}`) || langData.label}
                                        </span>
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
                                    {t('freeBooks.readButton')} ✨
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </article>
    );
}
