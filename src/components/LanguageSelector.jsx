import { useTranslation } from '../i18n';

const LANGUAGES = [
  { code: 'en', flag: '\uD83C\uDDFA\uD83C\uDDF8', label: 'EN' },
  { code: 'tr', flag: '\uD83C\uDDF9\uD83C\uDDF7', label: 'TR' },
  { code: 'ja', flag: '\uD83C\uDDEF\uD83C\uDDF5', label: 'JA' }
];

export default function LanguageSelector({ className = '' }) {
  const { lang, setLang } = useTranslation();

  return (
    <div className={`relative inline-flex items-center gap-1 ${className}`}>
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-bold transition ${
            lang === l.code
              ? 'bg-twilight/15 text-twilight'
              : 'text-cosmos/50 hover:bg-twilight/5 hover:text-cosmos/80'
          }`}
          aria-label={`Switch to ${l.label}`}
        >
          <span className="text-base">{l.flag}</span>
          <span className="hidden sm:inline">{l.label}</span>
        </button>
      ))}
    </div>
  );
}
