import { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from '../i18n';

const SERIES = [
  {
    slug: 'adventures-of-rusty',
    emoji: '\uD83D\uDC36',
    color: 'from-peach/20 to-starlight/10',
    border: 'border-peach/30',
    badge: 'bg-peach/20',
    accent: 'bg-peach',
    castFiles: ['bolt', 'sparky', 'daisy']
  },
  {
    slug: 'captain-barnacles-voyages',
    emoji: '\u2693',
    color: 'from-sky/20 to-mint/10',
    border: 'border-sky/30',
    badge: 'bg-sky/20',
    accent: 'bg-sky',
    castFiles: ['coral', 'gully', 'shelly']
  },
  {
    slug: 'astro-bun-to-the-moon',
    emoji: '\uD83D\uDC30',
    color: 'from-lavender/20 to-candy/10',
    border: 'border-lavender/30',
    badge: 'bg-lavender/20',
    accent: 'bg-lavender',
    castFiles: ['cosmo', 'nova', 'crater']
  },
  {
    slug: 'pippa-the-little-plane',
    emoji: '\u2708\uFE0F',
    color: 'from-mint/20 to-sky/10',
    border: 'border-mint/30',
    badge: 'bg-mint/20',
    accent: 'bg-mint',
    castFiles: ['breezy', 'hangar', 'zip']
  },
  {
    slug: 'professor-hoot-mysteries',
    emoji: '\uD83E\uDD89',
    color: 'from-starlight/20 to-peach/10',
    border: 'border-starlight/30',
    badge: 'bg-starlight/20',
    accent: 'bg-starlight',
    castFiles: ['clue', 'maple', 'bramble']
  },
  {
    slug: 'grug-garden',
    emoji: '\uD83C\uDF31',
    color: 'from-candy/20 to-mint/10',
    border: 'border-candy/30',
    badge: 'bg-candy/20',
    accent: 'bg-candy',
    castFiles: ['pebble', 'fern', 'twig']
  }
];

export default function Characters() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right, 0 initial
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const series = SERIES[activeIndex];
  const tKey = `characters.series.${series.slug}`;

  const goTo = useCallback((index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const goPrev = useCallback(() => {
    const next = activeIndex === 0 ? SERIES.length - 1 : activeIndex - 1;
    setDirection(-1);
    setActiveIndex(next);
  }, [activeIndex]);

  const goNext = useCallback(() => {
    const next = (activeIndex + 1) % SERIES.length;
    setDirection(1);
    setActiveIndex(next);
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goPrev, goNext]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  const mainImg = `/characters/${series.slug}/main.png`;
  const castMembers = series.castFiles.map((file, i) => ({
    name: t(`${tKey}.cast.${i}.name`),
    role: t(`${tKey}.cast.${i}.role`),
    img: `/characters/${series.slug}/supporting_${file}.png`
  }));

  return (
    <article className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <span className="sticker border-candy bg-candy/10 text-cosmos">
          {'\uD83C\uDFA0'} {t('characters.sticker')}
        </span>
        <h1 className="mt-4 font-display text-4xl text-cosmos sm:text-5xl">
          {t('characters.title')}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-cosmos/70">
          {t('characters.subtitle')}
        </p>
      </div>

      {/* Series selector strip */}
      <div className="mt-10 flex items-center justify-center gap-2">
        <button
          onClick={goPrev}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-twilight/30 bg-white text-lg font-bold text-cosmos transition hover:border-twilight hover:bg-twilight/10"
          aria-label="Previous series"
        >
          {'\u25C0'}
        </button>

        <div className="flex flex-wrap justify-center gap-2">
          {SERIES.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => goTo(i)}
              aria-label={t(`characters.series.${s.slug}.series`)}
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 text-xl transition-all duration-300 ${
                i === activeIndex
                  ? `${s.badge} border-dashed ${s.border} scale-110 shadow-soft`
                  : 'border-transparent bg-white/60 opacity-50 hover:opacity-80'
              }`}
            >
              {s.emoji}
            </button>
          ))}
        </div>

        <button
          onClick={goNext}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-twilight/30 bg-white text-lg font-bold text-cosmos transition hover:border-twilight hover:bg-twilight/10"
          aria-label="Next series"
        >
          {'\u25B6'}
        </button>
      </div>

      {/* Main gallery card */}
      <div
        ref={trackRef}
        className="mt-8 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          key={activeIndex}
          className={`gallery-slide ${direction > 0 ? 'gallery-slide-from-right' : direction < 0 ? 'gallery-slide-from-left' : ''}`}
        >
          <div className={`rounded-[2rem] border-2 border-dashed ${series.border} bg-gradient-to-br ${series.color} p-6 sm:p-8`}>
            {/* Series header */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${series.badge} text-3xl shadow-soft`}>
                {series.emoji}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-twilight">
                  {t(`${tKey}.tone`)}
                </p>
                <h2 className="font-display text-2xl text-cosmos sm:text-3xl">
                  {t(`${tKey}.series`)}
                </h2>
              </div>
            </div>

            {/* Lead character spotlight */}
            <div className="mt-6 grid items-center gap-6 sm:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
              <div className="group relative mx-auto w-56 sm:mx-0 sm:w-full">
                <div className={`absolute inset-0 rounded-3xl ${series.accent}/30 blur-2xl transition-all group-hover:blur-3xl`} />
                <img
                  src={mainImg}
                  alt={t(`${tKey}.lead`)}
                  className="relative w-full rounded-3xl border-2 border-dashed border-white/60 bg-white/80 object-contain p-3 shadow-soft transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="eager"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border-2 border-dashed border-white bg-white/90 px-4 py-1 text-sm font-extrabold text-cosmos shadow-soft">
                  {'\u2B50'} {t(`${tKey}.lead`)}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl text-cosmos">
                  {t(`${tKey}.lead`)}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-cosmos/75">
                  {t(`${tKey}.leadDescription`)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-twilight/10 px-3 py-1 text-xs font-bold text-twilight">
                    {t(`${tKey}.artStyle`)}
                  </span>
                  <span className="rounded-full bg-cosmos/5 px-3 py-1 text-xs font-semibold text-cosmos/60">
                    {'\uD83C\uDF0D'} {t(`${tKey}.world`)}
                  </span>
                </div>
              </div>
            </div>

            {/* Supporting cast gallery */}
            <div className="mt-8">
              <h3 className="font-display text-lg text-cosmos">
                {t('characters.supportingCastLabel')}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {castMembers.map((member, i) => (
                  <div
                    key={member.name}
                    className="cast-card group rounded-2xl border-2 border-dashed border-white/50 bg-white/70 p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-candy"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="relative mx-auto w-32 sm:w-full">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full rounded-2xl bg-white/60 object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="font-display text-base font-bold text-cosmos">
                        {member.name}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-cosmos/60">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {SERIES.map((s, i) => (
          <button
            key={s.slug}
            onClick={() => goTo(i)}
            aria-label={t(`characters.series.${s.slug}.series`)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? `w-8 ${s.accent}`
                : 'w-2.5 bg-cosmos/15 hover:bg-cosmos/30'
            }`}
          />
        ))}
      </div>
    </article>
  );
}
