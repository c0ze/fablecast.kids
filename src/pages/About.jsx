export default function About() {
  const steps = [
    {
      emoji: '\uD83D\uDCD6',
      title: 'Character Bibles',
      description:
        'Each of our six series starts with a lovingly written character bible \u2014 defining the lead character, supporting cast, art style, tone, and world rules. These bibles ensure every story feels consistent, safe, and true to the character\u2019s personality.',
      color: 'from-lavender/20 to-candy/10'
    },
    {
      emoji: '\u270D\uFE0F',
      title: 'Story Generation',
      description:
        'Every morning, our AI story engine writes a brand-new adventure for each series. Stories follow age-appropriate narrative structures \u2014 friendship arcs, gentle mysteries, discovery journeys \u2014 with emotional beats calibrated for children aged 3\u20138.',
      color: 'from-peach/20 to-starlight/10'
    },
    {
      emoji: '\uD83C\uDFA8',
      title: 'Illustration',
      description:
        'Each page gets a unique, full-color illustration generated to match the character\u2019s established art style. Visual consistency is maintained by injecting character anchors and style descriptors into every image prompt.',
      color: 'from-sky/20 to-mint/10'
    },
    {
      emoji: '\uD83C\uDF0D',
      title: 'Translation',
      description:
        'The English master edition is translated into Turkish and Japanese (with more languages coming soon). Translated editions reuse the original illustrations, so visual storytelling stays consistent across all languages.',
      color: 'from-mint/20 to-sky/10'
    },
    {
      emoji: '\uD83D\uDD0A',
      title: 'Narration',
      description:
        'AI-powered text-to-speech generates warm, expressive narration for every page. Each language has its own carefully selected voice. Audio syncs with progressive text reveal for an immersive read-along experience.',
      color: 'from-candy/20 to-lavender/10'
    },
    {
      emoji: '\uD83D\uDCE6',
      title: 'Daily Delivery',
      description:
        'By morning, 18 fresh stories (6 series \u00D7 3 languages) are packaged as beautiful, mobile-friendly web books and delivered to your library. Every single day, a new adventure awaits.',
      color: 'from-starlight/20 to-peach/10'
    }
  ];

  return (
    <article className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
      <div className="text-center">
        <span className="sticker border-mint bg-mint/10 text-cosmos">{'\u2728'} About</span>
        <h1 className="mt-4 font-display text-4xl text-cosmos sm:text-5xl">How Fablecast Works</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-cosmos/70">
          Every morning, a magical pipeline turns character bibles into fully illustrated,
          narrated children&rsquo;s books across three languages. Here&rsquo;s how the magic happens.
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
                Step {index + 1}
              </p>
              <h2 className="mt-1 font-display text-2xl text-cosmos">{step.title}</h2>
              <p className="mt-2 leading-relaxed text-cosmos/75">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border-2 border-dashed border-starlight/30 bg-gradient-to-br from-starlight/10 to-peach/10 p-8 text-center">
        <span className="text-4xl">{'\uD83D\uDEE1\uFE0F'}</span>
        <h2 className="mt-3 font-display text-2xl text-cosmos">Safety First, Always</h2>
        <p className="mx-auto mt-3 max-w-xl text-cosmos/70">
          Every series has built-in world rules that prevent inappropriate settings or themes.
          Stories are guardrailed to stay cozy, positive, and age-appropriate. We review
          output quality regularly and adjust our safety parameters continuously.
        </p>
      </div>

      <div className="mt-10 rounded-[2rem] border-2 border-dashed border-candy/30 bg-gradient-to-br from-candy/10 to-lavender/10 p-8 text-center">
        <span className="text-4xl">{'\uD83D\uDEB7'}</span>
        <h2 className="mt-3 font-display text-2xl text-cosmos">Forever Ad-Free</h2>
        <p className="mx-auto mt-3 max-w-xl text-cosmos/70">
          Fablecast will never show advertisements. Your family&rsquo;s reading time is sacred
          and will always be free from commercial interruptions.
        </p>
      </div>
    </article>
  );
}
