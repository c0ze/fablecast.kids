const posts = [
  {
    date: 'February 9, 2026',
    tag: 'Launch',
    tagColor: 'bg-mint/20 text-cosmos border-mint/40',
    emoji: '\uD83D\uDE80',
    title: 'Welcome to Fablecast!',
    body: 'Today we\u2019re launching Fablecast \u2014 a daily children\u2019s story service that delivers 18 fresh, illustrated, and narrated stories every single morning. Six beloved character series, three languages, and one magical reading routine for families with kids aged 3\u20138.',
    highlights: [
      '6 character series: Rusty, Captain Barnacles, Astro-Bun, Pippa, Professor Hoot, and Grug',
      '3 languages: English, Turkish, and Japanese',
      'Full illustrations and AI-generated audio narration on every page',
      'Mobile-first web reader with progressive text reveal',
      '4 subscription tiers from Free to Emperor'
    ]
  },
  {
    date: 'February 9, 2026',
    tag: 'Roadmap',
    tagColor: 'bg-lavender/20 text-cosmos border-lavender/40',
    emoji: '\uD83D\uDDFA\uFE0F',
    title: 'What\u2019s Coming Next',
    body: 'We have big plans for Fablecast. Here\u2019s a peek at what we\u2019re working on for the months ahead.',
    highlights: [
      '\uD83C\uDDEA\uD83C\uDDF8 Spanish (es-US) \u2014 our first expansion language, coming soon',
      '\uD83C\uDDE7\uD83C\uDDF7 Portuguese (pt-BR) \u2014 bringing stories to Brazilian families',
      '\uD83C\uDDE9\uD83C\uDDEA German (de-DE) \u2014 Geschichten f\u00FCr kleine Leser',
      '\uD83C\uDDEB\uD83C\uDDF7 French (fr-FR) \u2014 des histoires pour les petits lecteurs',
      'Story library with search and favorites',
      'Offline reading mode for tablets',
      'More character series based on subscriber feedback'
    ]
  },
  {
    date: 'February 9, 2026',
    tag: 'Promise',
    tagColor: 'bg-candy/20 text-cosmos border-candy/40',
    emoji: '\uD83D\uDC96',
    title: 'Our Ad-Free Promise',
    body: 'Fablecast is built for families, not advertisers. We believe children\u2019s reading time should be sacred and free from commercial interruptions. That\u2019s why we\u2019re making a simple, permanent promise:',
    highlights: [
      'Fablecast will never show advertisements \u2014 not now, not ever',
      'We will never sell or share your data with advertisers',
      'Your subscription is what keeps us running, and that\u2019s how it should be',
      'Reading time is family time \u2014 we won\u2019t interrupt it'
    ]
  }
];

export default function Blog() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
      <div className="text-center">
        <span className="sticker border-bubblegum bg-bubblegum/10 text-cosmos">{'\uD83D\uDCDD'} Blog</span>
        <h1 className="mt-4 font-display text-4xl text-cosmos">News &amp; Updates</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cosmos/70">
          The latest from the Fablecast team \u2014 new features, new languages, and the story
          behind the stories.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {posts.map((post) => (
          <article
            key={post.title}
            className="card-cute rounded-[2rem] border-2 border-dashed border-plumMist/15 bg-white/70 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl">{post.emoji}</span>
              <span className={`rounded-full border-2 border-dashed ${post.tagColor} px-3 py-1 text-xs font-bold`}>
                {post.tag}
              </span>
              <span className="text-sm text-cosmos/50">{post.date}</span>
            </div>
            <h2 className="mt-3 font-display text-2xl text-cosmos">{post.title}</h2>
            <p className="mt-3 leading-relaxed text-cosmos/75">{post.body}</p>
            {post.highlights && (
              <ul className="mt-4 space-y-2">
                {post.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-cosmos/75">
                    <span className="mt-0.5 text-mint">{'\u2714'}</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border-2 border-dashed border-starlight/30 bg-gradient-to-br from-starlight/10 to-mint/10 p-8 text-center">
        <span className="text-4xl">{'\uD83D\uDCEB'}</span>
        <h2 className="mt-3 font-display text-2xl text-cosmos">Stay in the Loop</h2>
        <p className="mx-auto mt-3 max-w-md text-cosmos/70">
          Major updates are announced here and sent to subscribers via email. Follow along
          as we grow the Fablecast universe!
        </p>
      </div>
    </article>
  );
}
