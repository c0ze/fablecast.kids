import { useTranslation } from '../i18n';

export default function Blog() {
  const { t } = useTranslation();

  const posts = [
    {
      date: t('blog.posts.3.date'),
      tag: t('blog.posts.3.tag'),
      tagColor: 'bg-sky/20 text-cosmos border-sky/40',
      emoji: '\uD83C\uDF0D',
      title: t('blog.posts.3.title'),
      body: t('blog.posts.3.body'),
      highlights: [
        t('blog.posts.3.highlights.0'),
        t('blog.posts.3.highlights.1'),
        t('blog.posts.3.highlights.2'),
        t('blog.posts.3.highlights.3'),
        t('blog.posts.3.highlights.4')
      ]
    },
    {
      date: t('blog.posts.0.date'),
      tag: t('blog.posts.0.tag'),
      tagColor: 'bg-mint/20 text-cosmos border-mint/40',
      emoji: '\uD83D\uDE80',
      title: t('blog.posts.0.title'),
      body: t('blog.posts.0.body'),
      highlights: [
        t('blog.posts.0.highlights.0'),
        t('blog.posts.0.highlights.1'),
        t('blog.posts.0.highlights.2'),
        t('blog.posts.0.highlights.3'),
        t('blog.posts.0.highlights.4')
      ]
    },
    {
      date: t('blog.posts.1.date'),
      tag: t('blog.posts.1.tag'),
      tagColor: 'bg-lavender/20 text-cosmos border-lavender/40',
      emoji: '\uD83D\uDDFA\uFE0F',
      title: t('blog.posts.1.title'),
      body: t('blog.posts.1.body'),
      highlights: [
        t('blog.posts.1.highlights.0'),
        t('blog.posts.1.highlights.1'),
        t('blog.posts.1.highlights.2'),
        t('blog.posts.1.highlights.3'),
        t('blog.posts.1.highlights.4'),
        t('blog.posts.1.highlights.5'),
        t('blog.posts.1.highlights.6')
      ]
    },
    {
      date: t('blog.posts.2.date'),
      tag: t('blog.posts.2.tag'),
      tagColor: 'bg-candy/20 text-cosmos border-candy/40',
      emoji: '\uD83D\uDC96',
      title: t('blog.posts.2.title'),
      body: t('blog.posts.2.body'),
      highlights: [
        t('blog.posts.2.highlights.0'),
        t('blog.posts.2.highlights.1'),
        t('blog.posts.2.highlights.2'),
        t('blog.posts.2.highlights.3')
      ]
    }
  ];

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
      <div className="text-center">
        <span className="sticker border-bubblegum bg-bubblegum/10 text-cosmos">{'\uD83D\uDCDD'} {t('blog.sticker')}</span>
        <h1 className="mt-4 font-display text-4xl text-cosmos">{t('blog.title')}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cosmos/70">
          {t('blog.subtitle')}
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
        <h2 className="mt-3 font-display text-2xl text-cosmos">{t('blog.stayInLoopTitle')}</h2>
        <p className="mx-auto mt-3 max-w-md text-cosmos/70">
          {t('blog.stayInLoopSubtitle')}
        </p>
      </div>
    </article>
  );
}
