import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../i18n';

const LANGUAGES = [
  { code: 'en', country: 'us', label: 'English' },
  { code: 'tr', country: 'tr', label: 'Türkçe' },
  { code: 'ja', country: 'jp', label: '日本語' },
  { code: 'es', country: 'es', label: 'Español' },
  { code: 'pt', country: 'br', label: 'Português' },
  { code: 'de', country: 'de', label: 'Deutsch' },
  { code: 'fr', country: 'fr', label: 'Français' }
];

function Flag({ country, size = 20 }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${country}.png`}
      srcSet={`https://flagcdn.com/w80/${country}.png 2x`}
      width={size}
      height={Math.round(size * 0.75)}
      alt=""
      className="inline-block rounded-sm"
      style={{ objectFit: 'cover' }}
    />
  );
}

export default function LanguageSelector({ className = '' }) {
  const { lang, setLang } = useTranslation();
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

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border-2 border-dashed border-twilight/30 bg-white px-3 py-1.5 text-sm font-bold text-cosmos transition hover:border-twilight hover:bg-twilight/5"
        aria-expanded={isOpen}
      >
        <Flag country={currentLang.country} size={20} />
        <span className="hidden sm:inline">{currentLang.label}</span>
        <span className="text-xs text-cosmos/40">▼</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-2xl border-2 border-dashed border-twilight/20 bg-white p-2 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col gap-1">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-bold transition ${lang === l.code
                  ? 'bg-twilight/10 text-twilight'
                  : 'text-cosmos/70 hover:bg-twilight/5 hover:text-cosmos'
                  }`}
              >
                <Flag country={l.country} size={24} />
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
