import { useEffect, useMemo, useRef, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider, hasFirebaseConfig } from './firebase';
import Logo from './Logo';
import HeroBanner from './HeroBanner';

const seriesEmoji = {
  'adventures-of-rusty': { icon: '\uD83D\uDC36', color: 'bg-peach', border: 'border-peach' },
  'captain-barnacles-voyages': { icon: '\u2693', color: 'bg-sky', border: 'border-sky' },
  'astro-bun-to-the-moon': { icon: '\uD83D\uDC30', color: 'bg-lavender', border: 'border-lavender' },
  'pippa-the-little-plane': { icon: '\u2708\uFE0F', color: 'bg-mint', border: 'border-mint' },
  'professor-hoot-mysteries': { icon: '\uD83E\uDD89', color: 'bg-starlight', border: 'border-starlight' },
  'grug-garden': { icon: '\uD83C\uDF31', color: 'bg-candy', border: 'border-candy' }
};

const dailyDrops = [
  {
    slug: 'adventures-of-rusty',
    series: 'The Adventures of Rusty',
    lead: 'Rusty',
    cast: ['Bolt', 'Sparky', 'Daisy'],
    world: 'workshops, parks, and friendly neighborhoods',
    generatedAt: '20260209_051315',
    titles: {
      English: "Rusty's Warm Winter Friend",
      Turkish: "Rusty'nin S\u0131cak K\u0131\u015F Arkada\u015F\u0131",
      Japanese: '\u30E9\u30B9\u30C6\u30A3\u306E\u6E29\u304B\u3044\u51AC\u306E\u53CB\u3060\u3061'
    }
  },
  {
    slug: 'captain-barnacles-voyages',
    series: "Captain Barnacles' Voyages",
    lead: 'Captain Barnacles',
    cast: ['Coral', 'Gully', 'Shelly'],
    world: 'oceans, harbors, and rainy shorelines',
    generatedAt: '20260209_051940',
    titles: {
      English: 'Captain Barnacles and the Winter Sparkle',
      Turkish: 'Kaptan Barnacles ve K\u0131\u015F I\u015F\u0131lt\u0131s\u0131',
      Japanese: '\u30AD\u30E3\u30D7\u30C6\u30F3\u30FB\u30D0\u30FC\u30CA\u30AF\u30EB\u30BA\u3068\u51AC\u306E\u304D\u3089\u3081\u304D'
    }
  },
  {
    slug: 'astro-bun-to-the-moon',
    series: 'Astro-Bun to the Moon',
    lead: 'Astro-Bun',
    cast: ['Cosmo', 'Nova', 'Crater'],
    world: 'rockets, moons, and observatory skies',
    generatedAt: '20260209_052639',
    titles: {
      English: 'Astro-Bun and the Lunar Cocoa Friend',
      Turkish: 'Astro-Tav\u015Fan ve Ay Kakao Dostu',
      Japanese: '\u30A2\u30B9\u30C8\u30ED\u3074\u3087\u3093\u3068\u6708\u306E\u30B3\u30B3\u30A2\u306E\u304A\u53CB\u3060\u3061'
    }
  },
  {
    slug: 'pippa-the-little-plane',
    series: 'Pippa the Little Plane',
    lead: 'Pippa',
    cast: ['Breezy', 'Hangar', 'Zip'],
    world: 'airports, clouds, and sunny flight paths',
    generatedAt: '20260209_053309',
    titles: {
      English: "Pippa's Cozy Cocoa Flight",
      Turkish: "Pippa'n\u0131n S\u0131cac\u0131k Kakao U\u00E7u\u015Fu",
      Japanese: '\u30D4\u30C3\u30D1\u306E\u307D\u304B\u307D\u304B\u30B3\u30B3\u30A2\u3072\u3068\u3063\u98DB\u3073'
    }
  },
  {
    slug: 'professor-hoot-mysteries',
    series: 'The Mysteries of Professor Hoot',
    lead: 'Professor Hoot',
    cast: ['Clue', 'Maple', 'Bramble'],
    world: 'cozy libraries, gardens, and village corners',
    generatedAt: '20260209_053940',
    titles: {
      English: 'Professor Hoot and the Sparkling Patience',
      Turkish: 'Bayku\u015F Profes\u00F6r Hoot ve I\u015F\u0131lt\u0131l\u0131 Sab\u0131r',
      Japanese: '\u30D5\u30AF\u30ED\u30A6\u535A\u58EB\u3068\u304D\u3089\u3081\u304F\u5FCD\u8010'
    }
  },
  {
    slug: 'grug-garden',
    series: "Grug's Garden",
    lead: 'Grug',
    cast: ['Pebble', 'Fern', 'Twig'],
    world: 'meadows, creeks, and mossy garden trails',
    generatedAt: '20260209_054646',
    titles: {
      English: "Grug's Winter Warm-Up",
      Turkish: "Grug'un K\u0131\u015Fa Is\u0131nma Zaman\u0131",
      Japanese: '\u30B0\u30E9\u30B0\u306E\u51AC\u652F\u5EA6'
    }
  }
];

const languageSnippets = {
  English:
    'Little Rusty peeked out. Soft snowflakes danced, turning everything snowy white and bright!',
  Turkish:
    'K\u00FC\u00E7\u00FCk Rusty ba\u015F\u0131n\u0131 uzatt\u0131. Yumu\u015Fac\u0131k kar taneleri dans ediyordu, her yeri bembeyaz ve \u0131\u015F\u0131l \u0131\u015F\u0131l yap\u0131yordu!',
  Japanese:
    '\u5C0F\u3055\u306A\u30E9\u30B9\u30C6\u30A3\u304C\u3061\u3087\u3053\u3093\u3068\u9854\u3092\u51FA\u3057\u307E\u3057\u305F\u3002\u3075\u308F\u3075\u308F\u306E\u96EA\u304C\u3072\u3089\u3072\u3089\u3068\u821E\u3044\u3001\u3042\u305F\u308A\u4E00\u9762\u3092\u771F\u3063\u767D\u3067\u30AD\u30E9\u30AD\u30E9\u306B\u3057\u3066\u3044\u307E\u3057\u305F\uFF01'
};

const langFlags = { English: '\uD83C\uDDFA\uD83C\uDDF8', Turkish: '\uD83C\uDDF9\uD83C\uDDF7', Japanese: '\uD83C\uDDEF\uD83C\uDDF5' };

const pipelineFeatures = [
  {
    icon: '\uD83D\uDCD6',
    title: 'Character Bibles',
    description:
      'Every story grows from a lovingly crafted character bible with unique art styles, personalities, and world rules.',
    accent: 'from-lavender/30 to-candy/20'
  },
  {
    icon: '\uD83C\uDF0D',
    title: 'Three Languages',
    description:
      'English stories are created first, then beautifully translated to Turkish and Japanese while keeping the same lovely illustrations.',
    accent: 'from-sky/30 to-mint/20'
  },
  {
    icon: '\uD83D\uDEE1\uFE0F',
    title: 'Safe & Cozy',
    description:
      'Every series has guardrails to keep settings safe, age-appropriate, and full of warmth for little readers aged 3\u20138.',
    accent: 'from-starlight/30 to-peach/20'
  }
];

const pricing = [
  {
    name: 'Free',
    subtitle: 'Try a taste of magic',
    price: '$0',
    period: '/mo',
    features: ['2 sample books', 'Child-safe reading mode', 'No card required'],
    cta: 'Start Free',
    emoji: '\u2728',
    accent: 'border-lavender/40'
  },
  {
    name: 'Squire',
    subtitle: 'Pick your favorite',
    price: '$4.99',
    period: '/mo',
    features: ['1 story series', '1 language', '30 fresh books every month'],
    cta: 'Choose Squire',
    emoji: '\uD83D\uDC51',
    accent: 'border-sky/40'
  },
  {
    name: 'Knight',
    subtitle: 'Most loved by families',
    price: '$9.99',
    period: '/mo',
    features: ['All 6 series', '1 language', 'Daily drop access'],
    cta: 'Choose Knight',
    featured: true,
    emoji: '\uD83C\uDFC6',
    accent: 'border-starlight'
  },
  {
    name: 'Emperor',
    subtitle: 'The full treasure chest',
    price: '$14.99',
    period: '/mo',
    features: ['All 6 series', 'All 3 languages', 'AI-generated audio narration'],
    cta: 'Choose Emperor',
    emoji: '\uD83D\uDC8E',
    accent: 'border-bubblegum/40'
  }
];

function formatDropDate(stamp) {
  const datePart = stamp.slice(0, 8);
  const year = Number(datePart.slice(0, 4));
  const month = Number(datePart.slice(4, 6)) - 1;
  const day = Number(datePart.slice(6, 8));
  return new Date(year, month, day).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
}

function App() {
  const [activeLang, setActiveLang] = useState('English');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('Free');
  const [authUser, setAuthUser] = useState(null);
  const [authBusy, setAuthBusy] = useState(false);
  const [authError, setAuthError] = useState('');
  const [setupModalOpen, setSetupModalOpen] = useState(false);
  const [setupSaving, setSetupSaving] = useState(false);
  const [setupAgeRange, setSetupAgeRange] = useState('3-5');
  const [setupLanguage, setSetupLanguage] = useState('English');
  const [setupSeries, setSetupSeries] = useState('');
  const [revealReady, setRevealReady] = useState(false);
  const revealRef = useRef(null);
  const touchStartX = useRef(null);

  const latestBatch = useMemo(
    () => [...dailyDrops].sort((a, b) => b.generatedAt.localeCompare(a.generatedAt))[0],
    []
  );

  useEffect(() => {
    const nodes = revealRef.current?.querySelectorAll('[data-reveal]');
    if (!nodes?.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((node) => observer.observe(node));
    setRevealReady(true);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % dailyDrops.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!auth || !hasFirebaseConfig) {
      return undefined;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthBusy(true);
      setAuthError('');

      if (!user) {
        setAuthUser(null);
        setSetupModalOpen(false);
        setAuthBusy(false);
        return;
      }

      if (!user.emailVerified) {
        setAuthError('Only verified Google accounts can continue.');
        await signOut(auth);
        setAuthBusy(false);
        return;
      }

      setAuthUser(user);

      if (!db) {
        setAuthBusy(false);
        return;
      }

      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        const profile = userSnap.exists() ? userSnap.data() : null;

        if (profile?.preferredLanguage) {
          setSetupLanguage(profile.preferredLanguage);
          setActiveLang(profile.preferredLanguage);
        }
        if (profile?.childAgeRange) {
          setSetupAgeRange(profile.childAgeRange);
        }
        if (profile?.preferredSeries) {
          setSetupSeries(profile.preferredSeries);
        }
        if (profile?.plan) {
          setSelectedPlan(profile.plan);
        }

        setSetupModalOpen(!profile?.setupComplete);
      } catch (error) {
        setAuthError('Could not load your account settings yet.');
      } finally {
        setAuthBusy(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (selectedPlan !== 'Squire') {
      setSetupSeries('');
    }
  }, [selectedPlan]);

  const currentStory = dailyDrops[carouselIndex];
  const currentEmoji = seriesEmoji[currentStory.slug];

  const goToPrevStory = () =>
    setCarouselIndex((prev) => (prev === 0 ? dailyDrops.length - 1 : prev - 1));

  const goToNextStory = () => setCarouselIndex((prev) => (prev + 1) % dailyDrops.length);

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
    setAuthError('');
    document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoogleSignIn = async () => {
    if (!auth || !hasFirebaseConfig) {
      setAuthError('Google sign-in is not configured yet. Add Firebase web env vars to enable it.');
      return;
    }

    try {
      setAuthBusy(true);
      setAuthError('');
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      setAuthError('Google sign-in was canceled or failed. Please try again.');
      setAuthBusy(false);
    }
  };

  const handleSetupSave = async (event) => {
    event.preventDefault();

    if (!authUser || !db) {
      setAuthError('Please sign in again before saving your preferences.');
      return;
    }

    if (selectedPlan === 'Squire' && !setupSeries) {
      setAuthError('Squire requires a preferred series.');
      return;
    }

    try {
      setSetupSaving(true);
      setAuthError('');

      await setDoc(
        doc(db, 'users', authUser.uid),
        {
          uid: authUser.uid,
          email: authUser.email,
          displayName: authUser.displayName,
          plan: selectedPlan,
          childAgeRange: setupAgeRange,
          preferredLanguage: setupLanguage,
          preferredSeries: selectedPlan === 'Squire' ? setupSeries : null,
          setupComplete: true,
          updatedAt: serverTimestamp(),
          setupCompletedAt: serverTimestamp()
        },
        { merge: true }
      );

      setActiveLang(setupLanguage);
      setSetupModalOpen(false);
    } catch (error) {
      setAuthError('Could not save your preferences. Please try once more.');
    } finally {
      setSetupSaving(false);
    }
  };

  const handleSignOut = async () => {
    if (!auth) {
      return;
    }
    await signOut(auth);
    setAuthUser(null);
  };

  const handleCarouselTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleCarouselTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 40) {
      return;
    }

    if (deltaX < 0) {
      goToNextStory();
    } else {
      goToPrevStory();
    }
  };

  return (
    <main ref={revealRef} className="min-h-screen bg-page text-cosmos">
      {/* ===== NAVBAR ===== */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo className="h-14 w-auto sm:h-16" />
        <div className="flex items-center gap-3">
          <a
            href="#daily-drop"
            className="hidden rounded-full border-2 border-dashed border-bubblegum/50 px-4 py-2 text-sm font-bold text-bubblegum transition hover:bg-bubblegum/10 sm:inline-flex"
          >
            Today&apos;s Stories
          </a>
          <a
            href="#auth-section"
            className="rounded-full bg-twilight px-5 py-2.5 text-sm font-bold text-white shadow-candy transition hover:bg-plumMist hover:shadow-glow"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* Floating decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-10 h-40 w-40 animate-drift rounded-full bg-candy/20 blur-3xl" />
          <div className="absolute -right-8 top-20 h-36 w-36 animate-drift-slow rounded-full bg-mint/25 blur-3xl" />
          <div className="absolute bottom-10 left-1/4 h-32 w-32 animate-drift rounded-full bg-lavender/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 h-28 w-28 animate-drift-slow rounded-full bg-starlight/30 blur-3xl" />
        </div>

        <div
          data-reveal
          className={`reveal relative mx-auto max-w-6xl px-6 pb-6 pt-4 sm:pt-6 lg:px-8 ${
            revealReady ? '' : 'opacity-100'
          }`}
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="sticker border-bubblegum bg-bubblegum/10 text-bubblegum">
                  {'\u2728'} 18 stories daily
                </span>
                <span className="sticker border-mint bg-mint/10 text-cosmos" style={{ transform: 'rotate(1deg)' }}>
                  {'\uD83C\uDF0D'} 3 languages
                </span>
              </div>
              <h1 className="font-display text-4xl leading-tight text-cosmos sm:text-5xl lg:text-[3.4rem] lg:leading-[1.15]">
                A New Universe of{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Stories</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-starlight/40" />
                </span>
                , Every Single Morning
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-cosmos/80">
                Fresh, illustrated adventures delivered daily with the heart of bedtime
                storytelling. Six beloved characters, three languages, one magical reading
                routine.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#auth-section"
                  onClick={() => setSelectedPlan('Free')}
                  className="group rounded-full bg-twilight px-8 py-3.5 text-base font-bold text-white shadow-glow transition hover:bg-plumMist hover:shadow-candy"
                >
                  Start Free Trial {'\uD83D\uDE80'}
                </a>
                <a
                  href="#daily-drop"
                  className="rounded-full border-2 border-dashed border-twilight/40 bg-white/70 px-7 py-3.5 text-base font-bold text-twilight transition hover:border-twilight hover:bg-white"
                >
                  See Today&apos;s Drop {'\u2B07\uFE0F'}
                </a>
              </div>
            </div>

            {/* Banner illustration */}
            <div className="animate-float">
              <HeroBanner className="w-full rounded-3xl shadow-soft" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== DAILY DROP MARQUEE ===== */}
      <section
        id="daily-drop"
        data-reveal
        className="reveal wavy-top mt-6 border-y-2 border-dashed border-starlight/30 bg-gradient-to-r from-starlight/10 via-candy/5 to-mint/10 py-5"
      >
        <div className="mx-auto max-w-6xl overflow-hidden px-6 lg:px-8">
          <div className="whitespace-nowrap">
            <div className="inline-flex min-w-full animate-marquee gap-4 pr-4">
              {[...dailyDrops, ...dailyDrops].map((drop, index) => {
                const emoji = seriesEmoji[drop.slug];
                return (
                  <span
                    key={`${drop.slug}-${index}`}
                    className={`inline-flex items-center gap-2 rounded-full border-2 border-dashed ${emoji.border}/40 ${emoji.color}/15 px-5 py-2.5 text-sm font-bold`}
                  >
                    <span className="text-lg">{emoji.icon}</span>
                    {drop.titles.English}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DAILY BATCH SNAPSHOT ===== */}
      <section data-reveal className="reveal mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="text-center">
          <span className="sticker border-starlight bg-starlight/10 text-cosmos">
            {'\uD83D\uDCE6'} Daily Broadcast
          </span>
          <h2 className="mt-4 font-display text-3xl text-cosmos sm:text-4xl">
            {formatDropDate(latestBatch.generatedAt)}
          </h2>
          <p className="mt-2 text-cosmos/60">Six fresh stories are baked and ready!</p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {dailyDrops.map((drop) => {
            const emoji = seriesEmoji[drop.slug];
            return (
              <div
                key={drop.slug}
                className={`card-cute rounded-2xl border-2 border-dashed ${emoji.border}/30 ${emoji.color}/10 p-5 dots-pattern`}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${emoji.color}/30 text-xl`}>
                    {emoji.icon}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold leading-tight">{drop.series}</p>
                    <p className="text-xs text-cosmos/60">Lead: {drop.lead}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-cosmos/80">{drop.titles.English}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== LANGUAGE DEMO ===== */}
      <section data-reveal className="reveal mx-auto max-w-6xl px-6 pb-14 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border-2 border-dashed border-lavender/30 bg-gradient-to-br from-lavender/10 to-sky/10 p-8 lg:grid-cols-2">
          <div>
            <span className="sticker border-sky bg-sky/10 text-cosmos">
              {'\uD83C\uDF0D'} Multilingual
            </span>
            <h3 className="mt-4 font-display text-3xl text-cosmos">Same Story, Three Languages</h3>
            <p className="mt-3 text-cosmos/75">
              One real page from today&apos;s Rusty story, lovingly localized across all three
              editions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {Object.keys(languageSnippets).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    activeLang === lang
                      ? 'bg-twilight text-white shadow-candy'
                      : 'border-2 border-dashed border-twilight/30 bg-white text-twilight hover:border-twilight'
                  }`}
                >
                  {langFlags[lang]} {lang}
                </button>
              ))}
            </div>
          </div>
          <article className="rounded-2xl border-2 border-dashed border-peach/40 bg-moonbeam p-6 shadow-soft">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl">{'\uD83D\uDC36'}</span>
              <p className="text-xs font-bold uppercase tracking-wider text-twilight">
                Rusty&apos;s Warm Winter Friend ({activeLang})
              </p>
            </div>
            <p className="text-lg font-semibold leading-relaxed text-cosmos">
              {languageSnippets[activeLang]}
            </p>
          </article>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section data-reveal className="reveal mx-auto max-w-6xl px-6 pb-14 lg:px-8">
        <div className="mb-8 text-center">
          <span className="sticker border-mint bg-mint/10 text-cosmos">
            {'\u2699\uFE0F'} How It Works
          </span>
          <h3 className="mt-4 font-display text-3xl text-cosmos">Built with Love (and AI)</h3>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {pipelineFeatures.map((feature) => (
            <article
              key={feature.title}
              className={`card-cute rounded-2xl border-2 border-dashed border-plumMist/20 bg-gradient-to-br ${feature.accent} p-6`}
            >
              <span className="text-4xl">{feature.icon}</span>
              <h4 className="mt-3 font-display text-xl text-cosmos">{feature.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-cosmos/75">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== STORY CAROUSEL ===== */}
      <section data-reveal className="reveal mx-auto max-w-6xl px-6 pb-14 lg:px-8">
        <div className="rounded-[2rem] border-2 border-dashed border-candy/30 bg-gradient-to-br from-candy/8 to-starlight/8 p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="sticker border-candy bg-candy/10 text-cosmos">
                {'\uD83C\uDFA0'} Story Carousel
              </span>
              <h3 className="mt-3 font-display text-3xl text-cosmos">Meet the Characters</h3>
              <p className="mt-2 text-cosmos/70">
                Real daily titles and cast cards from each live series.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={goToPrevStory}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-candy/40 bg-white text-lg font-bold text-cosmos transition hover:border-candy hover:bg-candy/10"
                aria-label="Previous story"
              >
                {'\u25C0'}
              </button>
              <button
                onClick={goToNextStory}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-candy/40 bg-white text-lg font-bold text-cosmos transition hover:border-candy hover:bg-candy/10"
                aria-label="Next story"
              >
                {'\u25B6'}
              </button>
            </div>
          </div>
          <article
            className={`mt-6 rounded-2xl border-2 border-dashed ${currentEmoji.border}/30 ${currentEmoji.color}/15 bg-white/80 p-6 shadow-soft dots-pattern`}
            onTouchStart={handleCarouselTouchStart}
            onTouchEnd={handleCarouselTouchEnd}
          >
            <div className="flex items-center gap-3">
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${currentEmoji.color}/30 text-3xl`}>
                {currentEmoji.icon}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-twilight">
                  Series {carouselIndex + 1} of {dailyDrops.length}
                </p>
                <h4 className="font-display text-2xl">{currentStory.series}</h4>
              </div>
            </div>
            <p className="mt-4 text-lg font-semibold leading-relaxed">
              {currentStory.titles[activeLang]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-twilight/10 px-3 py-1 text-xs font-bold text-twilight">
                Lead: {currentStory.lead}
              </span>
              {currentStory.cast.map((member) => (
                <span key={member} className="rounded-full bg-cosmos/5 px-3 py-1 text-xs font-semibold text-cosmos/70">
                  {member}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-cosmos/60">World: {currentStory.world}</p>
          </article>
          <div className="mt-5 flex items-center justify-center gap-2">
            {dailyDrops.map((story, index) => {
              const e = seriesEmoji[story.slug];
              return (
                <button
                  key={story.slug}
                  onClick={() => setCarouselIndex(index)}
                  aria-label={`View ${story.series}`}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm transition ${
                    index === carouselIndex
                      ? `${e.color}/40 border-${e.border.replace('border-', '')} scale-110`
                      : 'border-transparent bg-white/60 opacity-60 hover:opacity-100'
                  }`}
                >
                  {e.icon}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section data-reveal className="reveal mx-auto max-w-6xl px-6 pb-14 lg:px-8">
        <div className="mb-8 text-center">
          <span className="sticker border-starlight bg-starlight/10 text-cosmos">
            {'\uD83C\uDF81'} Plans
          </span>
          <h3 className="mt-4 font-display text-3xl text-cosmos">Choose Your Story Bounty</h3>
          <p className="mt-3 text-cosmos/70">Simple plans for every reading routine.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricing.map((plan) => (
            <article
              key={plan.name}
              className={`card-cute rounded-[2rem] border-2 border-dashed p-6 ${
                plan.featured
                  ? 'relative border-starlight bg-gradient-to-br from-cosmos to-plumMist text-white shadow-glow'
                  : `${plan.accent} bg-white/80`
              }`}
            >
              {plan.featured && (
                <span className="absolute -right-2 -top-3 rotate-6 rounded-full bg-starlight px-3 py-1 text-xs font-extrabold text-cosmos shadow-md">
                  Most Loved
                </span>
              )}
              <span className="text-3xl">{plan.emoji}</span>
              <h4 className="mt-2 font-display text-2xl">{plan.name}</h4>
              <p className={`mt-1 text-sm ${plan.featured ? 'text-starlight' : 'text-cosmos/60'}`}>
                {plan.subtitle}
              </p>
              <p className="mt-4 text-4xl font-extrabold">
                {plan.price}
                <span
                  className={`text-base font-semibold ${
                    plan.featured ? 'text-starlight' : 'text-cosmos/60'
                  }`}
                >
                  {plan.period}
                </span>
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 text-mint">{'\u2714'}</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePlanSelect(plan.name)}
                className={`mt-6 w-full rounded-full px-4 py-3 text-sm font-bold transition ${
                  plan.featured
                    ? 'bg-starlight text-cosmos shadow-md hover:bg-lemon'
                    : 'bg-twilight text-white shadow-candy hover:bg-plumMist'
                }`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ===== AUTH SECTION ===== */}
      <section
        id="auth-section"
        data-reveal
        className="reveal border-y-2 border-dashed border-lavender/30 bg-gradient-to-br from-lavender/10 to-sky/10"
      >
        <div className="mx-auto max-w-3xl px-6 py-14 text-center lg:px-8">
          <span className="text-5xl">{'\uD83D\uDD13'}</span>
          <h3 className="mt-4 font-display text-3xl text-cosmos">Ready for Storytime?</h3>
          <p className="mt-3 text-cosmos/70">
            Sign in with Google for fast, password-free onboarding.
          </p>
          <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-twilight/10 px-4 py-1.5 text-sm font-bold text-twilight">
            Selected plan: {pricing.find((p) => p.name === selectedPlan)?.emoji} {selectedPlan}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {!authUser ? (
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={authBusy}
                className="rounded-full bg-twilight px-8 py-3.5 text-base font-bold text-white shadow-glow transition hover:bg-plumMist hover:shadow-candy disabled:cursor-not-allowed disabled:opacity-70"
              >
                {authBusy ? 'Signing In...' : 'Sign in with Google \uD83D\uDE80'}
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setSetupModalOpen(true)}
                  className="rounded-full bg-twilight px-8 py-3.5 text-base font-bold text-white shadow-glow transition hover:bg-plumMist"
                >
                  Continue Setup {'\u2728'}
                </button>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="rounded-full border-2 border-dashed border-twilight/40 bg-white px-8 py-3.5 text-base font-bold text-twilight transition hover:border-twilight"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>

          {authUser && (
            <p className="mt-5 text-sm font-semibold text-cosmos/80">
              Signed in as {authUser.email}
            </p>
          )}

          {authError && (
            <p className="mt-5 rounded-2xl border-2 border-dashed border-bubblegum/40 bg-bubblegum/10 px-4 py-3 text-sm font-semibold text-cosmos">
              {authError}
            </p>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-center lg:px-8">
        <Logo className="mx-auto h-10 w-auto opacity-60" />
        <p className="mt-4 text-sm text-cosmos/50">
          Made with love for little readers everywhere.
        </p>
        <div className="mt-3 flex justify-center gap-2">
          {Object.values(seriesEmoji).map((e, i) => (
            <span key={i} className="char-bounce text-xl">{e.icon}</span>
          ))}
        </div>
      </footer>

      {/* ===== SETUP MODAL ===== */}
      {setupModalOpen && authUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cosmos/55 px-4 py-8">
          <div className="w-full max-w-lg rounded-[2rem] border-2 border-dashed border-starlight/40 bg-moonbeam p-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{'\uD83C\uDF1F'}</span>
              <div>
                <h4 className="font-display text-2xl text-cosmos">Finish Your Setup</h4>
                <p className="text-sm text-cosmos/70">
                  One last step to personalize storytime!
                </p>
              </div>
            </div>
            <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-twilight/10 px-3 py-1 text-xs font-bold text-twilight">
              Plan: {pricing.find((p) => p.name === selectedPlan)?.emoji} {selectedPlan}
            </p>

            <form onSubmit={handleSetupSave} className="mt-5 space-y-4">
              <label className="block text-sm font-bold text-cosmos">
                Child&apos;s Age Range
                <select
                  value={setupAgeRange}
                  onChange={(event) => setSetupAgeRange(event.target.value)}
                  className="mt-1 w-full rounded-xl border-2 border-dashed border-lavender/40 bg-white px-4 py-2.5 font-semibold focus:border-twilight focus:outline-none"
                >
                  <option>3-5</option>
                  <option>6-8</option>
                  <option>9-12</option>
                </select>
              </label>

              <label className="block text-sm font-bold text-cosmos">
                Preferred Language
                <select
                  value={setupLanguage}
                  onChange={(event) => setSetupLanguage(event.target.value)}
                  className="mt-1 w-full rounded-xl border-2 border-dashed border-lavender/40 bg-white px-4 py-2.5 font-semibold focus:border-twilight focus:outline-none"
                >
                  <option>English</option>
                  <option>Turkish</option>
                  <option>Japanese</option>
                </select>
              </label>

              {selectedPlan === 'Squire' && (
                <label className="block text-sm font-bold text-cosmos">
                  Preferred Series
                  <select
                    value={setupSeries}
                    onChange={(event) => setSetupSeries(event.target.value)}
                    className="mt-1 w-full rounded-xl border-2 border-dashed border-lavender/40 bg-white px-4 py-2.5 font-semibold focus:border-twilight focus:outline-none"
                    required
                  >
                    <option value="">Select a series</option>
                    {dailyDrops.map((drop) => (
                      <option key={drop.slug} value={drop.series}>
                        {seriesEmoji[drop.slug].icon} {drop.series}
                      </option>
                    ))}
                  </select>
                </label>
              )}

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={setupSaving}
                  className="rounded-full bg-twilight px-6 py-2.5 text-sm font-bold text-white shadow-candy transition hover:bg-plumMist disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {setupSaving ? 'Saving...' : 'Save Preferences \u2728'}
                </button>
                <button
                  type="button"
                  onClick={() => setSetupModalOpen(false)}
                  className="rounded-full border-2 border-dashed border-twilight/40 bg-white px-6 py-2.5 text-sm font-bold text-twilight transition hover:border-twilight"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
