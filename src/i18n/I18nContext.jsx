import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import en from '../locales/en.json';
import tr from '../locales/tr.json';
import ja from '../locales/ja.json';

const LOCALES = { en, tr, ja };
const SUPPORTED = ['en', 'tr', 'ja'];
const STORAGE_KEY = 'fablecast_lang';

function getInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch {}
  return 'en';
}

function resolve(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = useCallback((code) => {
    if (!SUPPORTED.includes(code)) return;
    setLangState(code);
    try { localStorage.setItem(STORAGE_KEY, code); } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((key, vars) => {
    let val = resolve(LOCALES[lang], key);
    if (val === undefined) val = resolve(LOCALES.en, key);
    if (val === undefined) return key;
    if (typeof val !== 'string') return val;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        val = val.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      });
    }
    return val;
  }, [lang]);

  const value = useMemo(() => ({ t, lang, setLang }), [t, lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
