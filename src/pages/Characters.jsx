import { useTranslation } from '../i18n';

export default function Characters() {
  const { t } = useTranslation();

  const characters = [
    {
      slug: 'adventures-of-rusty',
      emoji: '\uD83D\uDC36',
      series: t('characters.series.adventures-of-rusty.series'),
      lead: t('characters.series.adventures-of-rusty.lead'),
      leadDescription: t('characters.series.adventures-of-rusty.leadDescription'),
      cast: [
        { name: t('characters.series.adventures-of-rusty.cast.0.name'), role: t('characters.series.adventures-of-rusty.cast.0.role') },
        { name: t('characters.series.adventures-of-rusty.cast.1.name'), role: t('characters.series.adventures-of-rusty.cast.1.role') },
        { name: t('characters.series.adventures-of-rusty.cast.2.name'), role: t('characters.series.adventures-of-rusty.cast.2.role') }
      ],
      world: t('characters.series.adventures-of-rusty.world'),
      tone: t('characters.series.adventures-of-rusty.tone'),
      artStyle: t('characters.series.adventures-of-rusty.artStyle'),
      color: 'from-peach/20 to-starlight/10',
      border: 'border-peach/30',
      badge: 'bg-peach/20'
    },
    {
      slug: 'captain-barnacles-voyages',
      emoji: '\u2693',
      series: t('characters.series.captain-barnacles-voyages.series'),
      lead: t('characters.series.captain-barnacles-voyages.lead'),
      leadDescription: t('characters.series.captain-barnacles-voyages.leadDescription'),
      cast: [
        { name: t('characters.series.captain-barnacles-voyages.cast.0.name'), role: t('characters.series.captain-barnacles-voyages.cast.0.role') },
        { name: t('characters.series.captain-barnacles-voyages.cast.1.name'), role: t('characters.series.captain-barnacles-voyages.cast.1.role') },
        { name: t('characters.series.captain-barnacles-voyages.cast.2.name'), role: t('characters.series.captain-barnacles-voyages.cast.2.role') }
      ],
      world: t('characters.series.captain-barnacles-voyages.world'),
      tone: t('characters.series.captain-barnacles-voyages.tone'),
      artStyle: t('characters.series.captain-barnacles-voyages.artStyle'),
      color: 'from-sky/20 to-mint/10',
      border: 'border-sky/30',
      badge: 'bg-sky/20'
    },
    {
      slug: 'astro-bun-to-the-moon',
      emoji: '\uD83D\uDC30',
      series: t('characters.series.astro-bun-to-the-moon.series'),
      lead: t('characters.series.astro-bun-to-the-moon.lead'),
      leadDescription: t('characters.series.astro-bun-to-the-moon.leadDescription'),
      cast: [
        { name: t('characters.series.astro-bun-to-the-moon.cast.0.name'), role: t('characters.series.astro-bun-to-the-moon.cast.0.role') },
        { name: t('characters.series.astro-bun-to-the-moon.cast.1.name'), role: t('characters.series.astro-bun-to-the-moon.cast.1.role') },
        { name: t('characters.series.astro-bun-to-the-moon.cast.2.name'), role: t('characters.series.astro-bun-to-the-moon.cast.2.role') }
      ],
      world: t('characters.series.astro-bun-to-the-moon.world'),
      tone: t('characters.series.astro-bun-to-the-moon.tone'),
      artStyle: t('characters.series.astro-bun-to-the-moon.artStyle'),
      color: 'from-lavender/20 to-candy/10',
      border: 'border-lavender/30',
      badge: 'bg-lavender/20'
    },
    {
      slug: 'pippa-the-little-plane',
      emoji: '\u2708\uFE0F',
      series: t('characters.series.pippa-the-little-plane.series'),
      lead: t('characters.series.pippa-the-little-plane.lead'),
      leadDescription: t('characters.series.pippa-the-little-plane.leadDescription'),
      cast: [
        { name: t('characters.series.pippa-the-little-plane.cast.0.name'), role: t('characters.series.pippa-the-little-plane.cast.0.role') },
        { name: t('characters.series.pippa-the-little-plane.cast.1.name'), role: t('characters.series.pippa-the-little-plane.cast.1.role') },
        { name: t('characters.series.pippa-the-little-plane.cast.2.name'), role: t('characters.series.pippa-the-little-plane.cast.2.role') }
      ],
      world: t('characters.series.pippa-the-little-plane.world'),
      tone: t('characters.series.pippa-the-little-plane.tone'),
      artStyle: t('characters.series.pippa-the-little-plane.artStyle'),
      color: 'from-mint/20 to-sky/10',
      border: 'border-mint/30',
      badge: 'bg-mint/20'
    },
    {
      slug: 'professor-hoot-mysteries',
      emoji: '\uD83E\uDD89',
      series: t('characters.series.professor-hoot-mysteries.series'),
      lead: t('characters.series.professor-hoot-mysteries.lead'),
      leadDescription: t('characters.series.professor-hoot-mysteries.leadDescription'),
      cast: [
        { name: t('characters.series.professor-hoot-mysteries.cast.0.name'), role: t('characters.series.professor-hoot-mysteries.cast.0.role') },
        { name: t('characters.series.professor-hoot-mysteries.cast.1.name'), role: t('characters.series.professor-hoot-mysteries.cast.1.role') },
        { name: t('characters.series.professor-hoot-mysteries.cast.2.name'), role: t('characters.series.professor-hoot-mysteries.cast.2.role') }
      ],
      world: t('characters.series.professor-hoot-mysteries.world'),
      tone: t('characters.series.professor-hoot-mysteries.tone'),
      artStyle: t('characters.series.professor-hoot-mysteries.artStyle'),
      color: 'from-starlight/20 to-peach/10',
      border: 'border-starlight/30',
      badge: 'bg-starlight/20'
    },
    {
      slug: 'grug-garden',
      emoji: '\uD83C\uDF31',
      series: t('characters.series.grug-garden.series'),
      lead: t('characters.series.grug-garden.lead'),
      leadDescription: t('characters.series.grug-garden.leadDescription'),
      cast: [
        { name: t('characters.series.grug-garden.cast.0.name'), role: t('characters.series.grug-garden.cast.0.role') },
        { name: t('characters.series.grug-garden.cast.1.name'), role: t('characters.series.grug-garden.cast.1.role') },
        { name: t('characters.series.grug-garden.cast.2.name'), role: t('characters.series.grug-garden.cast.2.role') }
      ],
      world: t('characters.series.grug-garden.world'),
      tone: t('characters.series.grug-garden.tone'),
      artStyle: t('characters.series.grug-garden.artStyle'),
      color: 'from-candy/20 to-mint/10',
      border: 'border-candy/30',
      badge: 'bg-candy/20'
    }
  ];

  return (
    <article className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
      <div className="text-center">
        <span className="sticker border-candy bg-candy/10 text-cosmos">{'\uD83C\uDFA0'} {t('characters.sticker')}</span>
        <h1 className="mt-4 font-display text-4xl text-cosmos sm:text-5xl">{t('characters.title')}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-cosmos/70">
          {t('characters.subtitle')}
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
                <h3 className="font-display text-lg text-cosmos">{t('characters.supportingCastLabel')}</h3>
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
              {'\uD83C\uDF0D'} {t('characters.worldLabel')} {char.world}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
