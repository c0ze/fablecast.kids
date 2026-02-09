const characters = [
  {
    slug: 'adventures-of-rusty',
    emoji: '\uD83D\uDC36',
    series: 'The Adventures of Rusty',
    lead: 'Rusty',
    leadDescription:
      'A cheerful little robot dog with a heart of gold and an insatiable curiosity. Rusty loves tinkering, helping friends, and discovering how things work.',
    cast: [
      { name: 'Bolt', role: 'Best friend, a speedy robot cat' },
      { name: 'Sparky', role: 'Playful firefly who lights the way' },
      { name: 'Daisy', role: 'Gentle garden robot who grows flowers' }
    ],
    world: 'Workshops, parks, and friendly neighborhoods',
    tone: 'Warm, curious, problem-solving',
    artStyle: 'Soft watercolor with warm sunset tones',
    color: 'from-peach/20 to-starlight/10',
    border: 'border-peach/30',
    badge: 'bg-peach/20'
  },
  {
    slug: 'captain-barnacles-voyages',
    emoji: '\u2693',
    series: "Captain Barnacles' Voyages",
    lead: 'Captain Barnacles',
    leadDescription:
      'A jolly sea creature captain with a big hat and an even bigger heart. Barnacles sails the seven seas finding new friends and solving watery mysteries.',
    cast: [
      { name: 'Coral', role: 'First mate, a clever seahorse' },
      { name: 'Gully', role: 'Lookout seagull with sharp eyes' },
      { name: 'Shelly', role: 'Wise old turtle and navigator' }
    ],
    world: 'Oceans, harbors, and rainy shorelines',
    tone: 'Adventurous, brave, kind-hearted',
    artStyle: 'Bright ocean blues and sandy watercolor washes',
    color: 'from-sky/20 to-mint/10',
    border: 'border-sky/30',
    badge: 'bg-sky/20'
  },
  {
    slug: 'astro-bun-to-the-moon',
    emoji: '\uD83D\uDC30',
    series: 'Astro-Bun to the Moon',
    lead: 'Astro-Bun',
    leadDescription:
      'A fluffy pink bunny in a tiny spacesuit who dreams of exploring every corner of the cosmos. Astro-Bun is brave, gentle, and always shares her snacks.',
    cast: [
      { name: 'Cosmo', role: 'Robot co-pilot and best friend' },
      { name: 'Nova', role: 'Sparkly star who guides the way' },
      { name: 'Crater', role: 'Friendly moon rock who loves jokes' }
    ],
    world: 'Rockets, moons, and observatory skies',
    tone: 'Dreamy, wonder-filled, encouraging',
    artStyle: 'Soft pastels with glowing cosmic highlights',
    color: 'from-lavender/20 to-candy/10',
    border: 'border-lavender/30',
    badge: 'bg-lavender/20'
  },
  {
    slug: 'pippa-the-little-plane',
    emoji: '\u2708\uFE0F',
    series: 'Pippa the Little Plane',
    lead: 'Pippa',
    leadDescription:
      'A cheerful little propeller plane with a bright yellow body and the biggest smile in the sky. Pippa loves flying through clouds and meeting new friends at every airport.',
    cast: [
      { name: 'Breezy', role: 'Playful wind spirit and best friend' },
      { name: 'Hangar', role: 'Wise old airport building full of stories' },
      { name: 'Zip', role: 'Speedy little drone who loves races' }
    ],
    world: 'Airports, clouds, and sunny flight paths',
    tone: 'Joyful, free-spirited, optimistic',
    artStyle: 'Bright skies with fluffy cloud textures',
    color: 'from-mint/20 to-sky/10',
    border: 'border-mint/30',
    badge: 'bg-mint/20'
  },
  {
    slug: 'professor-hoot-mysteries',
    emoji: '\uD83E\uDD89',
    series: 'The Mysteries of Professor Hoot',
    lead: 'Professor Hoot',
    leadDescription:
      'A wise old owl with round spectacles and a velvet cape. Professor Hoot loves solving gentle mysteries with patience, observation, and a warm cup of tea.',
    cast: [
      { name: 'Clue', role: 'Tiny magnifying-glass beetle assistant' },
      { name: 'Maple', role: 'Friendly squirrel librarian' },
      { name: 'Bramble', role: 'Mischievous hedgehog gardener' }
    ],
    world: 'Cozy libraries, gardens, and village corners',
    tone: 'Thoughtful, patient, gently mysterious',
    artStyle: 'Warm autumn tones with cozy golden lighting',
    color: 'from-starlight/20 to-peach/10',
    border: 'border-starlight/30',
    badge: 'bg-starlight/20'
  },
  {
    slug: 'grug-garden',
    emoji: '\uD83C\uDF31',
    series: "Grug's Garden",
    lead: 'Grug',
    leadDescription:
      'A gentle, mossy garden creature who tends to a magical meadow. Grug speaks softly, moves slowly, and believes every tiny seed holds a big adventure.',
    cast: [
      { name: 'Pebble', role: 'Smooth river stone friend who rolls along' },
      { name: 'Fern', role: 'Graceful plant spirit who dances in the breeze' },
      { name: 'Twig', role: 'Energetic stick insect who loves to build' }
    ],
    world: 'Meadows, creeks, and mossy garden trails',
    tone: 'Gentle, nurturing, nature-loving',
    artStyle: 'Earthy greens and soft botanical watercolors',
    color: 'from-candy/20 to-mint/10',
    border: 'border-candy/30',
    badge: 'bg-candy/20'
  }
];

export default function Characters() {
  return (
    <article className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
      <div className="text-center">
        <span className="sticker border-candy bg-candy/10 text-cosmos">{'\uD83C\uDFA0'} Characters</span>
        <h1 className="mt-4 font-display text-4xl text-cosmos sm:text-5xl">Meet the Cast</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-cosmos/70">
          Six beloved story worlds, each with a unique lead character and supporting friends.
          Every series has its own art style, tone, and world rules.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {characters.map((char) => (
          <div
            key={char.slug}
            className={`card-cute rounded-[2rem] border-2 border-dashed ${char.border} bg-gradient-to-br ${char.color} p-6 sm:p-8`}
          >
            <div className="flex flex-wrap items-start gap-4">
              <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${char.badge} text-4xl shadow-soft`}>
                {char.emoji}
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl text-cosmos sm:text-3xl">{char.series}</h2>
                <div className="mt-1 flex flex-wrap gap-2">
                  <span className="rounded-full bg-twilight/10 px-3 py-1 text-xs font-bold text-twilight">
                    {char.tone}
                  </span>
                  <span className="rounded-full bg-cosmos/5 px-3 py-1 text-xs font-semibold text-cosmos/60">
                    {char.artStyle}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg text-cosmos">
                  {char.emoji} {char.lead}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cosmos/75">
                  {char.leadDescription}
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg text-cosmos">Supporting Cast</h3>
                <ul className="mt-2 space-y-2">
                  {char.cast.map((member) => (
                    <li key={member.name} className="flex items-start gap-2 text-sm text-cosmos/75">
                      <span className="mt-0.5 text-twilight">{'\u2605'}</span>
                      <span>
                        <strong className="text-cosmos">{member.name}</strong> &mdash; {member.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm text-cosmos/60">
              {'\uD83C\uDF0D'} World: {char.world}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
