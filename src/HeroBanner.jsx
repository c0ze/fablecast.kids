export default function HeroBanner({ className = '' }) {
  return (
    <img
      src="/hero-banner.png"
      alt="Whimsical illustration of storybook characters"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
